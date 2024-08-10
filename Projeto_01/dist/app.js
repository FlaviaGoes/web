"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const padariaControl_1 = require("./controller/padariaControl");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
app.use(express_1.default.json());
function Inform() {
    console.log(`API executando na URL: http:localhost:${PORT}`);
}
app.post("/api/modalidade", padariaControl_1.cadastrarModal);
app.get("/api/modalidade/todas", padariaControl_1.listaModalidades);
app.get("/api/modalidade", padariaControl_1.pesquisaModalidade);
app.put("/api/modalidade", padariaControl_1.mudarModalidade);
app.delete("/api/modalidade", padariaControl_1.excluirModalidade);
app.post("/api/estoque", padariaControl_1.cadastroEstoque);
app.get("/api/estoque/todos", padariaControl_1.listaEstoque);
app.get("/api/estoque", padariaControl_1.buscaEstoque);
app.put("/api/estoque", padariaControl_1.Adicionarestoque);
app.delete("/api/estoque", padariaControl_1.removerEstoque);
app.post("/api/venda", padariaControl_1.registrarVenda);
app.get("/api/venda", padariaControl_1.buscaVenda);
app.listen(PORT, Inform);
