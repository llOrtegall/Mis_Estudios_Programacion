import { Sucursales } from './models/sucursales.model'

async function getAllSucursales() {
  try {
    const sucursales = await Sucursales.findAll({
      attributes: ['CODIGO', 'NOMBRE'],
      where: { ZONA: 39627 }
    })
    
    const sucursalesArray = sucursales.map(sucursal => {
      return sucursal.dataValues.CODIGO
    })

    console.log(sucursalesArray.length);

    return sucursalesArray
  } catch (error) {
    console.error(error)
  }
}

getAllSucursales()
  .then(res => {
    console.log(res)
  })