import { Router } from 'express';

import ToolsController from './controllers/ToolsController';

const routes = Router();

routes.get('/tools', ToolsController.index);
routes.post('/tools', ToolsController.create);
routes.delete('/tools/:id', ToolsController.delete);
routes.put('/tools/:id', ToolsController.edit);
routes.get('/tools', ToolsController.find);

export default routes;