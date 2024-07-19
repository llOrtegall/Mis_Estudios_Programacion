import { MetasProductos } from './models/metasproductos.model'
import { Sucursales } from './models/sucursales.model'
import { InfoVenta } from './models/infoVenta.model'
import { PuntosMultired } from './contantes'
import { CronJob } from 'cron'
import { fn } from 'sequelize'

async function getAllSucursales() {
  try {
    const sucursales = await Sucursales.findAll({
      attributes: ['CODIGO', 'NOMBRE'],
      where: { ZONA: 39627 }
    })

    return sucursales?.map(sucursal => sucursal.dataValues)
  } catch (error) {
    console.error(error)
  }
}

async function getAllProductos({ sucursal }: { sucursal: number[] | string[] }) {
  try {
    const results = await MetasProductos.findAll({
      attributes: ['SUCURSAL', 'CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'DOBLECHANCE'],
      where: { FECHA: fn('CURDATE'), ZONA: 39627, SUCURSAL: sucursal },
    })
    return results.map(product => product.dataValues)
  } catch (error) {
    console.error(error)
  }
}

async function createInfoVenta({ SUCURSAL, CHANCE, PAGAMAS, PAGATODO, GANE5, DOBLECHANCE }:
  { SUCURSAL: number, CHANCE: number, PAGAMAS: number, PAGATODO: number, GANE5: number, DOBLECHANCE: number }) {
  try {
    await InfoVenta.sync()
    await InfoVenta.create({ SUCURSAL, CHANCE, PAGAMAS, PAGATODO, GANE5, DOBLECHANCE })
  } catch (error) {
    throw error
  }
}

async function TareaSQL() {
  try {
    const results = await getAllProductos({ sucursal: PuntosMultired })

    if (!results) throw new Error('No se encontraron resultados')

    const puntosnoencontrados = PuntosMultired.filter(punto => !results.some(result => result.SUCURSAL === punto))

    results.map(product => {
      createInfoVenta({
        CHANCE: product.CHANCE,
        DOBLECHANCE: product.DOBLECHANCE,
        GANE5: product.GANE5,
        PAGAMAS: product.PAGAMAS,
        PAGATODO: product.PAGATODO,
        SUCURSAL: product.SUCURSAL
      })
    })

    puntosnoencontrados.map(punto => {
      createInfoVenta({
        CHANCE: 0,
        DOBLECHANCE: 0,
        GANE5: 0,
        PAGAMAS: 0,
        PAGATODO: 0,
        SUCURSAL: punto
      })
    })

    console.log('Tarea ejecutada correctamente');

  } catch (error) {
    console.error(error)
  }
}

const job = new CronJob(
	'*/10 * * * *', // cronTime  
  TareaSQL,
	null, // onComplete
	true, // start
	'America/Bogota' // timeZone
);

job.start()

