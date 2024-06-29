import express, {Request, Response} from 'express';
import {Pessoa} from './model/Pessoa';

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function appLog(){
    console.log("A API está disponível no URL http://localhost:3000");
}

function hello(req: Request, res:Response){
    return res.status(201).json({mensagem: "Hello World!"});
}

function calculateAge(req: Request, res: Response) {
    const obj: {name:string, anoNascimento:number} = req.body;
    console.log("Body>>> ", obj);

    const pessoa = new Pessoa(obj.name, obj.anoNascimento);

    res.status(200).json({mensagem:`${pessoa.nome} tem ${pessoa.calculaIdade()} anos.`})
}

app.get("/api/hello", hello);
app.post('/api/age', calculateAge);
app.listen(PORT, appLog);