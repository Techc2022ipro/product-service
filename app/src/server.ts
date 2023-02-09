import express from 'express';
import helmet from 'helmet';
import Logger from './libraries/libs/Logger';
import router from './routes/index';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(helmet.contentSecurityPolicy({
  directives: {
    default: ["self"],
    connectSrc: ["https://seller.look-book.net","https://look-book.net/api/"],
    imgSrc: ["self","https://ipro-develop-bucket.s3.ap-northeast-1.amazonaws.com/product-images/"]
  }
}));
app.use(express.static('build'))
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:2000/api","http://localhost:4000", "https://look-book.net/", "http://localhost:3000"],
  credentials: true
}));
app.use(express.json());
app.use("/api", router);
app.get('/*', function(req, res) { res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.listen(2000, () => {
    Logger.info('running');
    Logger.info('@http://localhost:2000');
})
