import { MetasProductos } from './models/metasproductos.model'
import { Sucursales } from './models/sucursales.model'
import { fn } from 'sequelize'

async function getAllSucursales() {
  try {
    const sucursales = await Sucursales.findAll({
      attributes: ['CODIGO', 'NOMBRE'],
      where: { ZONA: 39627, CODIGO: [39816, 39825, 39885] }
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
    return results?.map(producto => producto.dataValues)
  } catch (error) {
    console.error(error)
  }
}

getAllSucursales()
  .then(res => {
    const codigos = res?.map(sucursal => sucursal.CODIGO)

    if (codigos) {
      getAllProductos({ sucursal: codigos })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
      }

  })
  .catch(err => {
    console.error(err);
  })


// getAllProductos({ sucursal: [39816] })
//   .then(res => {
//     console.log(res)
//   })

