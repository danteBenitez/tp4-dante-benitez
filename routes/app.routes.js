const express = require('express');
const router = express.Router();
const appControllers = require('../controllers/app.controllers');

const {
    getController,
    postController, 
    putController,
    deleteController
} = appControllers;

// Cada ruta y método se asocia a un controlador que responde
// la petición
router.get('/', getController);

router.post('/', postController);

router.put('/', putController);

router.delete('/', deleteController);


// Se exporta el enrutador para ser utilizado por la app
module.exports = router;