import { Router } from "express";
import { getUsuarios, loginUser, newUser } from "../controllers/usuario.controller";

const router = Router();

router.post('/novoUsuario', newUser);
router.post('/login', loginUser);
router.get('/listUsuarios', getUsuarios);

export default router;