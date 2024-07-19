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

type InfoVentaCreationAttributes = Optional<InfoVentaAttributes, 'SUCURSAL'>

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
  FECHA: { type: DataTypes.DATEONLY, allowNull: false },
  SUCURSAL: { type: DataTypes.INTEGER, allowNull: false },
  CHANCE: { type: DataTypes.INTEGER, allowNull: false },
  PAGAMAS: { type: DataTypes.INTEGER, allowNull: false },
  PAGATODO: { type: DataTypes.INTEGER, allowNull: false },
  GANE5: { type: DataTypes.INTEGER, allowNull: false },
  DOBLECHANCE: { type: DataTypes.INTEGER, allowNull: false }
}, {
  sequelize: test_v1,
})

export { InfoVenta }