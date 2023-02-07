import express from 'express';
import helmet from 'helmet';
import Logger from './libraries/libs/Logger';
import router from './routes/index';
import cookieParser from 'cookie-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
app.use(cookieParser());
app.use(express.static('build'))
app.use(helmet());
app.use(express.json());
app.use("/auth", createProxyMiddleware({target:"http://localhost:8000/auth"}));
app.use("/api", router);
app.listen(2000, () => {
    Logger.info('running');
    Logger.info('@http://localhost:2000');
})
