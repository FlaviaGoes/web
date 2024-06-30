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
app.listen(PORT, Inform);
