declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_DB_URL?: string;
      APP_WEB_API_PORT?: string;
    }
  }
}

export {};
