import mongoose from 'mongoose'
const schema = new mongoose.Schema(
  { name: String, email: { type: String, unique: true } },
  { timestamps: true }
)
export const UserModel = mongoose.model('User', schema)
