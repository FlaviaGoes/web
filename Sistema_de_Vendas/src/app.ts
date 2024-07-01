import express from "express";
import {cadastrarModal, listaModalidades, pesquisaModalidade, mudarModalidade, excluirModalidade, cadastroEstoque, listaEstoque, buscaEstoque, Adicionarestoque, removerEstoque, registrarVenda, buscaVenda} from "./controller/padariaControl";

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
app.post("/api/estoque", cadastroEstoque);
app.get("/api/estoque/todos", listaEstoque);
app.get("/api/estoque", buscaEstoque);
app.put("/api/estoque", Adicionarestoque);
app.delete("/api/estoque", removerEstoque);
app.post("/api/venda", registrarVenda);
app.get("/api/venda", buscaVenda)

app.listen(PORT, Inform);