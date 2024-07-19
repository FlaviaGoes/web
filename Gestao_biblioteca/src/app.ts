import express from 'express';
import {InsertBook} from './controller/bookController';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/book", InsertBook)
