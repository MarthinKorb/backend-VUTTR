import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import ToolsController from './controllers/ToolsController';

import swaggerConfigs from './swagger';

const routes = Router();

routes.use('/api-docs', swaggerUi.serve);

routes.get('/api-docs', swaggerUi.setup(swaggerConfigs));

routes.get('/tools', ToolsController.index);
routes.post('/tools', ToolsController.create);
routes.delete('/tools/:id', ToolsController.delete);
routes.put('/tools/:id', ToolsController.edit);

export default routes;