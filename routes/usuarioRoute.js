import express from 'express'
//Crear app
const router = express.Router()
import { formularioLogin,formularioRegistro } from '../controllers/UsuarioController.js';

//Routing
router.get('/login', formularioLogin);
router.get('/registro',formularioRegistro)

export default router