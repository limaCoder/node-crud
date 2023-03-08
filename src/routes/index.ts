import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { videoRoutes } from './videos.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/videos', videoRoutes);

routes.use('/', (request, response) => {
	return response.json({ message: "Hello World Ignite!" });
});

export { routes };