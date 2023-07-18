import { DataTypes } from "sequelize";
import createSequelizeInstance from "../data-access/db";
const sequelizeInstance = createSequelizeInstance();

const UserModel = sequelizeInstance.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
  });

export default UserModel;