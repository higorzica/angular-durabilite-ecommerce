"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.post('/novoUsuario', usuario_controller_1.newUser);
router.post('/login', usuario_controller_1.loginUser);
router.get('/listUsuarios', usuario_controller_1.getUsuarios);
exports.default = router;
