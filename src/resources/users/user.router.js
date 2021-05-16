import express from 'express';
import { User } from './user.model.js';
import { usersService } from './user.service.js';

const userRouter = express.Router();

/* 
User (/users route)
GET /users - get all users (remove password from response)
GET /users/:userId - get the user by id (ex. “/users/123”) (remove password from response)
POST /users - create user
PUT /users/:userId - update user
DELETE /users/:userId - delete user
 */

/** Get all */
userRouter.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

export { userRouter };
