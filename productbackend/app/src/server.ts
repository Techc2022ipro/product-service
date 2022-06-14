import express from 'express';
import helmet from 'helmet';
import Logger from './libraries/libs/Logger';
import router from './routes/index';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(router);
app.listen(2000, () => {
    Logger.info('running');
    Logger.info('@http://localhost:2000');
})
