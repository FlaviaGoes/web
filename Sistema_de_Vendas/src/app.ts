import express from "express";
import {cadastrarModal, listaModalidades, pesquisaModalidade, mudarModalidade, excluirModalidade} from "./controller/padariaControl";

const app = express();
const PORT = process.env.PORT ?? 5000;
app.use(express.json());

function Inform(){
    console.log(`API executando na URL: http:localhost:${PORT}`);
}

app.post("/api/modalidade", cadastrarModal);
app.get("/api/modalidade/todas", listaModalidades);
app.get("/api/modalidade", pesquisaModalidade);
app.put("/api/modalidade", mudarModalidade);
app.delete("/api/modalidade", excluirModalidade);
app.listen(PORT, Inform);