import { Router } from "express";
import usuarioController from "../controllers/usuario.controller";

const usuarioRouter = Router();

usuarioRouter.post('/cadastro', usuarioController.cadastrar);
usuarioRouter.post('/login', usuarioController.autenticar);

export default usuarioRouter;