import { userDBActions } from './user.memory.repository.js';

export const usersService = {
  getAll: () => userDBActions.getAll(),
};
