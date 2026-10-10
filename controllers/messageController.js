const { body, matchedData, validationResult } = require('express-validator');
const queries = require('../models/queries');

const getIndex = async (req, res) => {
	const offset = Number(req.query.page) || 0;
	const messages = await queries.selectElevenMessages(offset);
	res.render('index', {
		title: `Club | Home${offset !== 0 ? ' Page ' + offset : ''}`,
		messages,
		offset,
	});
};
const getCreateMessage = (req, res) => {
	res.render('create-message', {
		title: 'Club | Create Message',
	});
};
const postCreateMessage = [
	// Could add a cap to content length.
	[
		body('title').isLength({ min: 1, max: 255 }).trim().withMessage('Invalid title'),
		body('content').isLength({ min: 1 }).trim().withMessage('Invalid message'),
	],
	async (req, res) => {
		const errors = validationResult(req);
		console.log(req.body);
		if (!errors.isEmpty) {
			return res.status(400).render('create-message', {
				title: 'Club | Create Message',
				errors: errors.array(),
			});
		}
		const { title, content } = matchedData(req);
		await queries.createMessage(title, content, req.user.user_id);
		return res.redirect('/');
	},
];
const deleteMessage = async (req, res) => {
	const { message_id } = req.params;
	const result = await queries.deleteMessageById(message_id);
	return res.sendStatus(204);
};

module.exports = { getIndex, getCreateMessage, postCreateMessage, deleteMessage };
