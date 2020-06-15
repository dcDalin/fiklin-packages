import {
  Column,
  DataType,
  Model,
  Table,
  BeforeCreate,
  BeforeUpdate,
} from 'sequelize-typescript';

@Table({
  paranoid: true,
  tableName: 'users',
})
export class User extends Model<User> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  firstName: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  lastName: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  userName: string;

  @Column({
    allowNull: false,
    unique: true,
    type: DataType.STRING,
  })
  email: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  password: string;

  @BeforeCreate
  @BeforeUpdate
  static makeLowerCase(instance: User) {
    // when creating new user or updating, lowercase the email
    instance.email = instance.email.toLocaleLowerCase();
  }
}

export default User;
