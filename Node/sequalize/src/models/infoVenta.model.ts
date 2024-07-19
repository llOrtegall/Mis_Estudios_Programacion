import { test_v1 } from '../connections/test_v1'
import { DataTypes, Model, Optional } from 'sequelize'

interface InfoVentaAttributes {
  FECHA: Date
  SUCURSAL: number
  CHANCE: number
  PAGAMAS: number
  PAGATODO: number
  GANE5: number
  DOBLECHANCE: number
}

type InfoVentaCreationAttributes = Optional<InfoVentaAttributes, 'FECHA'>

class InfoVenta extends Model<InfoVentaAttributes, InfoVentaCreationAttributes> {
  declare FECHA: Date
  declare SUCURSAL: number
  declare CHANCE: number
  declare PAGAMAS: number
  declare PAGATODO: number
  declare GANE5: number
  declare DOBLECHANCE: number
}

InfoVenta.init({
  FECHA: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  SUCURSAL: { type: DataTypes.INTEGER, allowNull: false },
  CHANCE: { type: DataTypes.INTEGER, defaultValue: 0 },
  PAGAMAS: { type: DataTypes.INTEGER, defaultValue: 0 },
  PAGATODO: { type: DataTypes.INTEGER, defaultValue: 0 },
  GANE5: { type: DataTypes.INTEGER, defaultValue: 0 },
  DOBLECHANCE: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
  sequelize: test_v1,
})

export { InfoVenta }