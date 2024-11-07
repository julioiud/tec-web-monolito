const { Router } = require('express')
const { 
    createTipoProyecto, 
    getTipoProyectos,
    updateTipoProyectoByID
} =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyectos)

// actualizar
router.put('/:id', updateTipoProyectoByID)

module.exports = router;