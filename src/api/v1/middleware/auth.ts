import { Response, Request, NextFunction } from 'express';

import jwt from 'jsonwebtoken';
import UserSchema from '../models/User';

declare var process: {
  env: {
    JWT_SECRET: string;
    NODE_ENV: string;
  };
};

export default async function protect(
  req: any,
  res: Response,
  next: NextFunction
) {
  let token;
  if (req?.headers?.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')?.[1];
  }

  // Make sure Token Exists
  if (!token) {
    // not authorized
    return res
      .status(401)
      .json({ success: false, msg: 'Not Authorized to access this route' });
  }
  try {
    //verify token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserSchema.findById(decoded.id);
    req.user = user;
    next();
  } catch (err) {
    //throw err;
    return res
      .status(401)
      .json({ success: false, msg: 'Not Authorized to access this route' });
  }
}
