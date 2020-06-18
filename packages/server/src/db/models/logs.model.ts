import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  paranoid: true,
  tableName: 'logs',
})
export class Logs extends Model<Logs> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  description: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  location: string;
}

export default Logs;
