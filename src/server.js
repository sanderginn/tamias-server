import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import router from './router';
import bodyParser from 'body-parser';

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port);
console.log('app running on port ', port);
