import { DataTypes, Model, Optional } from 'sequelize'
import { metas_92 } from '../connections/metas_92'
import { Sucursales } from './sucursales.model'

interface MetasProductosAttributes {
  FECHA: Date
  CHANCE: number
  PAGAMAS: number
  PAGATODO: number
  GANE5: number
  PAGATODO_JAMUNDI: number
  CHOLADITO: number
  PATA_MILLONARIA: number
  DOBLECHANCE: number
  CHANCE_MILLONARIO: number
  ASTRO: number
  LOTERIA_FISICA: number
  LOTERIA_VIRTUAL: number
  BETPLAY: number
  GIROS: number
  SOAT: number
  RECAUDOS: number
  RECARGAS: number
  ZONA: number
  CCOSTO: number
  SUCURSAL: number
  MT_CHANCE: number
  PROMEDIO_DIARIO_CHANCE: number
  MT_PAGAMAS: number
  PROMEDIO_DIARIO_PAGAMAS: number
  MT_PAGATODO: number
  PROMEDIO_DIARIO_PAGATODO: number
  MT_GANE5: number
  PROMEDIO_DIARIO_GANE5: number
  MT_PAGATODO_JAMUNDI: number
  PROMEDIO_DIARIO_PGTJAMUNDI: number
  MT_CHOLADITO: number
  PROMEDIO_DIARIO_CHOLADITO: number
  MT_PATA_MILLONARIA: number
  PROMEDIO_DIARIO_PATAMI: number
  MT_DOBLECHANCE: number
  PROMEDIO_DIARIO_DOBLECHANCE: number
  MT_CHANCE_MILLONARIO: number
  PROMEDIO_DIARIO_CHMILL: number
  MT_ASTRO: number
  PROMEDIO_DIARIO_ASTRO: number
  MT_LOTERIA_FISICA: number
  PROMEDIO_DIARIO_LF: number
  MT_LOTERIA_VIRTUAL: number
  PROMEDIO_DIARIO_LV: number
  MT_BETPLAY: number
  PROMEDIO_DIARIO_BETPLAY: number
  MT_GIROS: number
  PROMEDIO_DIARIO_GIROS: number
  MT_SOAT: number
  PROMEDIO_DIARIO_SOAT: number
  MT_RECAUDOS: number
  PROMEDIO_DIARIO_RECAUDOS: number
  MT_RECARGAS: number
  PROMEDIO_DIARIO_RECARGAS: number
  PROMO1: number
  META_PROMO1: number
  PROMO2: number
  META_PROMO2: number
  VERSION: string
}

type MetasProductosCreationAttributes = Optional<MetasProductosAttributes, 'FECHA'>

class MetasProductos extends Model<MetasProductosAttributes, MetasProductosCreationAttributes> {
  declare FECHA: Date
  declare CHANCE: number
  declare PAGAMAS: number
  declare PAGATODO: number
  declare GANE5: number
  declare PAGATODO_JAMUNDI: number
  declare CHOLADITO: number
  declare PATA_MILLONARIA: number
  declare DOBLECHANCE: number
  declare CHANCE_MILLONARIO: number
  declare ASTRO: number
  declare LOTERIA_FISICA: number
  declare LOTERIA_VIRTUAL: number
  declare BETPLAY: number
  declare GIROS: number
  declare SOAT: number
  declare RECAUDOS: number
  declare RECARGAS: number
  declare ZONA: number
  declare CCOSTO: number
  declare SUCURSAL: number
  declare MT_CHANCE: number
  declare PROMEDIO_DIARIO_CHANCE: number
  declare MT_PAGAMAS: number
  declare PROMEDIO_DIARIO_PAGAMAS: number
  declare MT_PAGATODO: number
  declare PROMEDIO_DIARIO_PAGATODO: number
  declare MT_GANE5: number
  declare PROMEDIO_DIARIO_GANE5: number
  declare MT_PAGATODO_JAMUNDI: number
  declare PROMEDIO_DIARIO_PGTJAMUNDI: number
  declare MT_CHOLADITO: number
  declare PROMEDIO_DIARIO_CHOLADITO: number
  declare MT_PATA_MILLONARIA: number
  declare PROMEDIO_DIARIO_PATAMI: number
  declare MT_DOBLECHANCE: number
  declare PROMEDIO_DIARIO_DOBLECHANCE: number
  declare MT_CHANCE_MILLONARIO: number
  declare PROMEDIO_DIARIO_CHMILL: number
  declare MT_ASTRO: number
  declare PROMEDIO_DIARIO_ASTRO: number
  declare MT_LOTERIA_FISICA: number
  declare PROMEDIO_DIARIO_LF: number
  declare MT_LOTERIA_VIRTUAL: number
  declare PROMEDIO_DIARIO_LV: number
  declare MT_BETPLAY: number
  declare PROMEDIO_DIARIO_BETPLAY: number
  declare MT_GIROS: number
  declare PROMEDIO_DIARIO_GIROS: number
  declare MT_SOAT: number
  declare PROMEDIO_DIARIO_SOAT: number
  declare MT_RECAUDOS: number
  declare PROMEDIO_DIARIO_RECAUDOS: number
  declare MT_RECARGAS: number
  declare PROMEDIO_DIARIO_RECARGAS: number
  declare PROMO1: number
  declare META_PROMO1: number
  declare PROMO2: number
  declare META_PROMO2: number
  declare VERSION: string
}

MetasProductos.init({
  FECHA: { type: DataTypes.DATEONLY, primaryKey: true },
  CHANCE: { type: DataTypes.DECIMAL },
  PAGAMAS: { type: DataTypes.DECIMAL },
  PAGATODO: { type: DataTypes.DECIMAL },
  GANE5: { type: DataTypes.DECIMAL },
  PAGATODO_JAMUNDI: { type: DataTypes.DECIMAL },
  CHOLADITO: { type: DataTypes.DECIMAL },
  PATA_MILLONARIA: { type: DataTypes.DECIMAL },
  DOBLECHANCE: { type: DataTypes.DECIMAL },
  CHANCE_MILLONARIO: { type: DataTypes.DECIMAL },
  ASTRO: { type: DataTypes.DECIMAL },
  LOTERIA_FISICA: { type: DataTypes.DECIMAL },
  LOTERIA_VIRTUAL: { type: DataTypes.DECIMAL },
  BETPLAY: { type: DataTypes.DECIMAL },
  GIROS: { type: DataTypes.DECIMAL },
  SOAT: { type: DataTypes.DECIMAL },
  RECAUDOS: { type: DataTypes.DECIMAL },
  RECARGAS: { type: DataTypes.DECIMAL },
  ZONA: { type: DataTypes.INTEGER },
  CCOSTO: { type: DataTypes.INTEGER },
  SUCURSAL: { type: DataTypes.INTEGER },
  MT_CHANCE: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_CHANCE: { type: DataTypes.DECIMAL },
  MT_PAGAMAS: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_PAGAMAS: { type: DataTypes.DECIMAL },
  MT_PAGATODO: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_PAGATODO: { type: DataTypes.DECIMAL },
  MT_GANE5: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_GANE5: { type: DataTypes.DECIMAL },
  MT_PAGATODO_JAMUNDI: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_PGTJAMUNDI: { type: DataTypes.DECIMAL },
  MT_CHOLADITO: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_CHOLADITO: { type: DataTypes.DECIMAL },
  MT_PATA_MILLONARIA: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_PATAMI: { type: DataTypes.DECIMAL },
  MT_DOBLECHANCE: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_DOBLECHANCE: { type: DataTypes.DECIMAL },
  MT_CHANCE_MILLONARIO: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_CHMILL: { type: DataTypes.DECIMAL },
  MT_ASTRO: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_ASTRO: { type: DataTypes.DECIMAL },
  MT_LOTERIA_FISICA: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_LF: { type: DataTypes.DECIMAL },
  MT_LOTERIA_VIRTUAL: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_LV: { type: DataTypes.DECIMAL },
  MT_BETPLAY: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_BETPLAY: { type: DataTypes.DECIMAL },
  MT_GIROS: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_GIROS: { type: DataTypes.DECIMAL },
  MT_SOAT: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_SOAT: { type: DataTypes.DECIMAL },
  MT_RECAUDOS: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_RECAUDOS: { type: DataTypes.DECIMAL },
  MT_RECARGAS: { type: DataTypes.DECIMAL },
  PROMEDIO_DIARIO_RECARGAS: { type: DataTypes.DECIMAL },
  PROMO1: { type: DataTypes.DECIMAL },
  META_PROMO1: { type: DataTypes.DECIMAL },
  PROMO2: { type: DataTypes.DECIMAL },
  META_PROMO2: { type: DataTypes.DECIMAL },
  VERSION: { type: DataTypes.STRING }
}, {
  tableName: 'METASPRODUCTOS',
  timestamps: false,
  sequelize: metas_92
})

MetasProductos.belongsTo(Sucursales, { foreignKey: 'CODIGO' })

export { MetasProductos }