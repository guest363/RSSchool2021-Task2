import { userRouter } from '../resources/users/user.router.js';

/**
 * Все эндпойнты
 */
export const initEndpoitsREST = (app) => {
  /**
   * Работа с пользователями
   */
  app.use('/users', userRouter);
};
