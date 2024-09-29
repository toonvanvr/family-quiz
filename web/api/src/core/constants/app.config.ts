import { z } from 'zod';

export const appConfig = {
  get port() {
    return z
      .string()
      .regex(/\d+/g)
      .optional()
      .default('4000')
      .parse(process.env.APP_WEB_API_PORT);
  },
};
