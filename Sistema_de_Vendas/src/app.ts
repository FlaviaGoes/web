import express from "express";
import {cadastrarModal} from "./controller/padariaControl";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function Inform(){
    console.log(`API executando na URL: http:localhost:${PORT}`);
}

app.listen(PORT, Inform);
app.post("api/modalidade", cadastrarModal);