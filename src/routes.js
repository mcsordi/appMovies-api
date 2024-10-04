import { Router } from "express";
import FilmController from "../src/app/controller/FilmController.js";
const routes = Router();

routes.post("/filmes", FilmController.store);
routes.get("/filmes", FilmController.index);
routes.get("/filmes/:id", FilmController.find);
routes.get("/categories", FilmController.category);
routes.delete("/filmes/:id", FilmController.delete);
routes.put("/filmes/:id", FilmController.update);

export default routes;
