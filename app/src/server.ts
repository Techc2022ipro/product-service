import express from 'express';
import helmet from 'helmet';
import Logger from './libraries/libs/Logger';
import router from './routes/index';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:3000", "https://look-book.net","http://localhost:4000", "http://prod-service:2000", "http://lookbook:3000"],
  credentials: true
}));
app.use(helmet());
app.use(express.json());
app.use(router);
app.listen(2000, () => {
    Logger.info('running');
    Logger.info('@http://localhost:2000');
})
