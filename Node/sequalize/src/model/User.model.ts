import { Model, DataTypes } from 'sequelize'
import { test_70 } from '../connections/test_70'

class User extends Model {}

User.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  document: { type: DataTypes.BIGINT, unique: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING }
}, {
  sequelize: test_70,
})

export { User }