const { Router } = require('express');
const messageController = require('../controllers/messageController');
const messageRouter = Router();
messageRouter.get('/', messageController.getIndex);
messageRouter.get('/create-message', messageController.getCreateMessage);
messageRouter.post('/create-message', messageController.postCreateMessage);
messageRouter.delete('/delete-message/:message_id', messageController.deleteMessage);
module.exports = messageRouter;
