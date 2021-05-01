import {NextFunction, Request, Response} from 'express';

import {Admin, Auth as AuthImport, AuthAdmin, AuthAdministration as AuthAdmins} from './deps';
import {Settings} from './Types/Settings';

export type Auth = AuthImport;
export type AuthAdministration = AuthAdmins;
export * from './Types';

declare global {
  namespace Express {
    interface Request {
      auth: Auth;
      authAdmin: AuthAdmins;
    }
  }
}

export default (settings: Settings) => {
  const firebase = Admin.initializeApp(settings, 'firebase');
  let firebaseAdmin: any;
  if (settings.credential) {
    firebaseAdmin = AuthAdmin.initializeApp(
      {
        ...settings,
        credential: AuthAdmin.credential.cert(((settings.credential || '') as unknown) as string),
      },
      'firebaseAdmin',
    );
  } else {
    firebaseAdmin = AuthAdmin.initializeApp(settings, 'firebaseAdmin');
  }

  return (req: Request, res: Response, next: NextFunction) => {
    req.auth = firebase.auth();
    req.authAdmin = firebaseAdmin.auth();

    next();
  };
};
