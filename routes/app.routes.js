const express = require('express');
const router = express.Router();
const appControllers = require('../controllers/app.controllers');

const {
    getController,
    postController, 
    putController,
    deleteController
} = appControllers;

router.get('/', getController);

router.post('/', postController);

router.put('/', putController);

router.delete('/', deleteController);

module.exports = router;