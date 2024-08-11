"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { RegisterRoutes } from './route/routes';
const swagger_1 = require("./config/swagger");
const app = (0, express_1.default)();
const PORT = 3040;
app.use(express_1.default.json());
const apiRouter = express_1.default.Router();
// RegisterRoutes(apiRouter);
app.use('/api', apiRouter);
// RegisterRoutes(app);
(0, swagger_1.setupSwagger)(app);
app.listen(PORT, () => console.log("API online na porta: " + PORT));
