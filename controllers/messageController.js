const { body, matchedData, validationResult } = require('express-validator');
const queries = require('../models/queries');

const getIndex = (req, res) => {
	res.render('index', {
		title: 'Club | Home',
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
		res.redirect('/');
	},
];

module.exports = { getIndex, getCreateMessage, postCreateMessage };
