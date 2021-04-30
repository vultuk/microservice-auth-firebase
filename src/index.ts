import { NextFunction, Request, Response } from 'express';

import { Auth as AuthImport, firebase, firebaseAuth } from './deps';
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
  firebase.initializeApp(settings);
  req.auth = firebaseAuth;

  next();
};
