import {  } from '../connections'
import { Model, DataTypes, Optional } from 'sequelize'

interface SucursalesAttributes {
  ZONA: string
  CCOSTO: string
  CODIGO: string
  NOMBRE: string
  DIRECCION: string
  TIPO: string
  DISPOSITIVO: string
  SUPERVISOR: string
}

type SucursalesCreationAttributes = Optional<SucursalesAttributes, 'CODIGO'>

class Sucursales extends Model<SucursalesAttributes, SucursalesCreationAttributes> {
  declare ZONA: string
  declare CCOSTO: string
  declare CODIGO: string
  declare NOMBRE: string
  declare DIRECCION: string
  declare TIPO: string
  declare DISPOSITIVO: string
  declare SUPERVISOR: string
}

Sucursales.init({
  ZONA: { type: DataTypes.STRING, allowNull: false },
  CCOSTO: { type: DataTypes.STRING, allowNull: false },
  CODIGO: { type: DataTypes.STRING, primaryKey: true },
  NOMBRE: { type: DataTypes.STRING },
  DIRECCION: { type: DataTypes.STRING },
  TIPO: { type: DataTypes.STRING },
  DISPOSITIVO: { type: DataTypes.STRING },
  SUPERVISOR: { type: DataTypes.STRING }
}, {
  tableName: 'SUCURSALES',
  timestamps: false,
  sequelize: metas_92
})

export { Sucursales }
