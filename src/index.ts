import {NextFunction, Request, Response} from 'express';

import {Settings} from './Types/Settings';

export * from './Types';

declare global {
  namespace Express {
    interface Request {
      auth: any;
    }
  }
}

export default (settings?: Settings) => (req: Request, res: Response, next: NextFunction) => {
  
  
  // req.firestore = db;

  next();
};
