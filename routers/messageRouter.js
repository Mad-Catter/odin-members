const { Router } = require('express');
const messageController = require('../controllers/messageController');
const messageRouter = Router();
messageRouter.get('/', messageController.getIndex);
messageRouter.get('/create-message', messageController.getCreateMessage);
messageRouter.post('/create-message', messageController.postCreateMessage);
module.exports = messageRouter;
