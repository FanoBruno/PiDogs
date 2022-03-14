const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require("./dogs")
const temperaments = require("./temperament")
const dog = require("./dog")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogs);
router.use("/temperament", temperaments)
router.use("/dog", dog)

module.exports = router;
