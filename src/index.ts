import { NextFunction, Request, Response } from 'express';

import { Admin, Auth as AuthImport } from './deps';
import { Settings } from './Types/Settings';

export type Auth = AuthImport;
export * from './Types';

declare global {
  namespace Express {
    interface Request {
      auth: Auth;
    }
  }
}

export default (settings: Settings) => (req: Request, res: Response, next: NextFunction) => {
  Admin.initializeApp(settings);
  req.auth = Admin.auth();

  next();
};
