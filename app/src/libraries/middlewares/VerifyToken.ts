import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';
import process from 'process';
import {InternalServerError, Unauthorized} from '../libs/error/Errors';
import Logger from '../libs/Logger';
import ErrorWrapper from '../libs/ParserWrapper';

const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.cookie;
    if(!token){
      res.send({isVerified: false});
      return;
    } 
    const secret = process.env.ACCESS_TOKEN_SECRET;
    if(!secret) throw new InternalServerError();

    verify(token.toString().split('=')[1] ,secret, (err, decoded) => {
      if(err && err.name == 'TokenExpiredError') {
        Logger.error('Token expired');
      }
      res.locals['user'] = decoded;
    });
    next();
};

export default VerifyToken;
