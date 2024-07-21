"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("./controller/bookController");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.post("/books", bookController_1.InsertBook);
app.get("/books", bookController_1.allBooks);
app.get("/books/:id", bookController_1.bookById);
app.put("/books/:id", bookController_1.atulizaLivro);
app.delete("/books/:id", bookController_1.deletaBook);
app.listen(PORT, () => console.log("API online na porta: " + PORT));
