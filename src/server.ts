import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'VUTTR API',
            version: '1.0.0',
        }
    },
    apis: ['./routes.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(express.json());
/**
 * @swagger
 *   /tools:
 *      get:
 *          description: List all tools
 *      responses: 
 *          200
 *          description: Success
 */
app.use(routes);
app.use(errorHandler);

console.log('Server running on port 3333');
app.listen(3333);