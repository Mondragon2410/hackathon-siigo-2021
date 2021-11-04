import express, { Application } from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import path from 'path'

import routes from './routes/routes';

const app: Application = express();

//Settings
dotenv.config();
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(routes)

export default app;