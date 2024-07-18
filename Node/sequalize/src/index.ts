import { Sucursales } from './models/sucursales.model'

async function getAllSucursales() {
  try {
    const sucursales = await Sucursales.findAll()
    console.log(sucursales)
  } catch (error) {
    console.error(error)
  }
}

getAllSucursales()