import { UserModel } from './user.model.js'
export const getAllUsers = async () => UserModel.find()
export const createUser = async (data) => UserModel.create(data)
