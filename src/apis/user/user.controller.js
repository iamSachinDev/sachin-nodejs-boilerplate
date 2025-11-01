import { successResponse } from '../../helpers/response.js'

import { getAllUsers, createUser } from './user.service.js'

export async function getUsers (req, res, next) {
  try {
    successResponse(res, await getAllUsers())
  } catch (e) {
    next(e)
  }
}

export async function addUser (req, res, next) {
  try {
    successResponse(res, await createUser(req.body), 201)
  } catch (e) {
    next(e)
  }
}
