const { Router } = require('express');
const accountController = require('../controllers/accountController.js');

const accountRouter = Router();
accountRouter.get('/', accountController.getCreateAccount);
accountRouter.post('/', accountController.postCreateAccount);
accountRouter.get('/membership', accountController.getMembership);
accountRouter.post('/membership', accountController.postMembership);

module.exports = accountRouter;
