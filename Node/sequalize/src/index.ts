/*
import { MetasProductos } from './models/metasproductos.model'
import { Sucursales } from './models/sucursales.model'
import { InfoVenta } from './models/infoVenta.model'
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
    return results?.map(producto => producto.dataValues)
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

getAllSucursales()
  .then(res => {
    const codigos = res?.map(sucursal => sucursal.CODIGO)

    console.log(codigos)

    if (codigos) {
      getAllProductos({ sucursal: [41241, 14124, 51515, 51231] })
        .then(res => {
          console.log(res);

          // TODO: codigo para crear la infoVenta
        
          if(res){
            res.map(product => {
              createInfoVenta({
                SUCURSAL: product.SUCURSAL,
                CHANCE: product.CHANCE,
                PAGAMAS: product.PAGAMAS,
                PAGATODO: product.PAGATODO,
                GANE5: product.GANE5,
                DOBLECHANCE: product.DOBLECHANCE
              })
            })
          }
        
        })
        .catch(err => {
          console.error(err)
        })
      }

  })
  .catch(err => {
    console.error(err);
  })
  

getAllProductos({ sucursal: [39816] })
  .then(res => {
    console.log(res)
  })
*/

import express, { Request, Response } from 'express'
import 'dotenv/config'

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})

