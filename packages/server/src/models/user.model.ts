import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  })
  name!: string;
}

export default User;
