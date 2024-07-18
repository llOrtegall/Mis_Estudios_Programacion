// import { Sucursales } from './models/sucursales.model'

// async function getAllSucursales() {
//   try {
//     const sucursales = await Sucursales.findAll({
//       attributes: ['CODIGO', 'NOMBRE'],
//       where: { ZONA: 39627 }
//     })
    
//     const sucursalesArray = sucursales.map(sucursal => {
//       return sucursal.dataValues.CODIGO
//     })

//     console.log(sucursalesArray.length);

//     return sucursalesArray
//   } catch (error) {
//     console.error(error)
//   }
// }

// getAllSucursales()
//   .then(res => {
//     console.log(res)
//   })

import { fn } from 'sequelize'
import { MetasProductos } from './models/metasproductos.model'

async function getAllProductos() {
  try {
    const results = await MetasProductos.findAll({
      attributes: ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'DOBLECHANCE'],
      where: { FECHA: fn('CURDATE'), ZONA: 39627 }
    })

    return results
  } catch (error) {
    console.error(error)
  }
}

getAllProductos()
  .then(res => {
    console.log(res)
  })