import express from 'express';
import {InsertBook, allBooks, bookById, deletaBook, atulizaLivro} from './controller/bookController';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/books", InsertBook);
app.get("/books", allBooks);
app.get("/books/:id", bookById);
app.put("/books/:id", atulizaLivro);
app.delete("/books/:id", deletaBook);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));
