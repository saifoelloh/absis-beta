const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const {validateBody, schemas} = require('../authentication/user.js');

router.get('/', userController.index);
router.post('/', validateBody(schemas.authSchema), userController.create);

router.get('/:id', userController.show);
router.put('/:id', validateBody(schemas.authSchema), userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
