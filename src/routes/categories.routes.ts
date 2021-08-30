import { Router } from "express";
import Multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const CategoriesRoutes = Router();
const upload = Multer({
  dest: "./tmp",
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { CategoriesRoutes };
