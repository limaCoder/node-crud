import "reflect-metadata";

import express from "express";

import "./database";

import { routes } from './routes';

const app = express();

const PORT = 3333;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));