import { MetasProductos } from './models/metasproductos.model'
import { Sucursales } from './models/sucursales.model'
import { fn } from 'sequelize'

async function getAllSucursales() {
  try {
    const sucursales = await Sucursales.findAll({
      attributes: ['CODIGO', 'NOMBRE'],
      where: { ZONA: 39627 }
    })

    const sucursalesArray = sucursales.map(sucursal => {
      return sucursal.dataValues.CODIGO
    })

    return sucursalesArray
  } catch (error) {
    console.error(error)
  }
}

async function getAllProductos() {
  try {
    const results = await MetasProductos.findOne({
      attributes: ['SUCURSAL', 'CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'DOBLECHANCE'],
      where: { FECHA: fn('CURDATE'), ZONA: 39627, SUCURSAL: 39816 }
    })

    return results
  } catch (error) {
    console.error(error)
  }
}

// getAllSucursales()
//   .then(res => {
//     console.log(res)
//   })

getAllProductos()
  .then(res => {
    console.log(res)
  })

