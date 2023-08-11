/*
  Events Routes
  /api/events
*/

const { Router } = require("express");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { validarJWT } = require("../middelwares/validar-jwt");
const { check } = require("express-validator");
const { validarCampos } = require("../middelwares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();

//Todas las rutas deben pasar por la validación de JWT
router.use(validarJWT);

//Obtener eventos
router.get(
  '/',
  getEventos
);

//Crear eventos
router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
  ],
  crearEvento
);

//Actualizar eventos
router.put('/:id', actualizarEvento);

//Eliminar eventos
router.delete('/:id', eliminarEvento);


module.exports = router;