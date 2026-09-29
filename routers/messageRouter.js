const { Router } = require('express');
const messageController = require('../controllers/messageController');
const messageRouter = Router();
messageRouter.get('/', messageController.getIndex);
messageRouter.get('/create', messageController.getCreate);
messageRouter.post('/create', messageController.postCreate);
module.exports = messageRouter;
