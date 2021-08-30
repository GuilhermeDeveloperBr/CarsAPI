import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const SpecificationsRoutes = Router();

SpecificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { SpecificationsRoutes };
