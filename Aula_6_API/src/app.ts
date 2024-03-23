import express, {Request, Response} from 'express';
import {Pessoa} from './model/Pessoa';

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function appLog(){
    console.log("A API está disponível no URL https://localhost:3000");
}

function hello(req: Request, res:Response){
    return res.status(201).json({mensagem: "Hello World!"});
}

app.get("/api/hello", hello);
app.listen(PORT, appLog);