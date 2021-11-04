import express, { Application } from 'express'

import { createServer } from "http";
import dotenv from "dotenv"
import cors from 'cors'
import path from 'path'

import routes from './routes/routes';
import { Server } from 'socket.io';

export const app: Application = express();

//Settings
dotenv.config();
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(routes)

const httpServer = createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: "*:*"
  },
});

export default app;