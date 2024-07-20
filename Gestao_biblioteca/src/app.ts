import express from 'express';
import {InsertBook} from './controller/bookController';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/books", InsertBook)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));
