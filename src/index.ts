import {NextFunction, Request, Response} from 'express';

import {Admin, Auth as AuthImport, AuthAdmin, AuthAdministration} from './deps';
import {Settings} from './Types/Settings';

export type Auth = AuthImport;
export * from './Types';

declare global {
  namespace Express {
    interface Request {
      auth: Auth;
      authAdmin: AuthAdministration;
    }
  }
}

export default (settings: Settings) => (req: Request, res: Response, next: NextFunction) => {
  const firebase = Admin.initializeApp(settings, 'firebase');
  const firebaseAdmin = AuthAdmin.initializeApp(settings, 'firebaseAdmin');
  req.auth = firebase.auth();
  req.authAdmin = firebaseAdmin.auth();

  next();
};
