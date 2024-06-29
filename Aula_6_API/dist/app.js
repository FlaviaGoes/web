"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pessoa_1 = require("./model/Pessoa");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function appLog() {
    console.log("A API está disponível no URL http://localhost:3000");
}
function hello(req, res) {
    return res.status(201).json({ mensagem: "Hello World!" });
}
function calculateAge(req, res) {
    const obj = req.body;
    console.log("Body>>> ", obj);
    const pessoa = new Pessoa_1.Pessoa(obj.name, obj.anoNascimento);
    res.status(200).json({ mensagem: `${pessoa.nome} tem ${pessoa.calculaIdade()} anos.` });
}
app.get("/api/hello", hello);
app.post('/api/age', calculateAge);
app.listen(PORT, appLog);
