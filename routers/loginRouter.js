const { Router } = require('express');
const loginController = require('../controllers/loginController.js');

const loginRouter = Router();
loginRouter.get('/', loginController.getLogin);
loginRouter.post('/', loginController.postLogin);
loginRouter.get('/logout', loginController.getLogout);

module.exports = loginRouter;
