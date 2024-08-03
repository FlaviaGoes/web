import express from 'express';
import { setupSwagger } from './config/swagger';
import { RegisterRoutes } from './route/routes';
import { productController } from './controller/ProductController';
productController

const app = express();

const PORT = 3040;

const apiRouter = express.Router();
RegisterRoutes(apiRouter);

app.use('/api', apiRouter);

RegisterRoutes(app);
setupSwagger(app);



app.listen(PORT, ()=> console.log("API online na porta: " + PORT));