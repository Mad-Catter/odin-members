const bcrypt = require('bcryptjs');
const { body, matchedData, validationResult } = require('express-validator');
const queries = require('../models/queries');

const getCreate = (req, res) => {
	res.render('create', {
		title: 'Club | Create Account',
	});
};

// More strict validations could be placed here.  Especially on password.
// These would have to be mirrored with html form restrictions in /create as well.
const validateUser = [
	body('email').trim().isEmail().withMessage('invalid email'),
	body('email')
		.trim()
		.custom(async (email) => {
			const user = await queries.selectUserByEmail(email);
			if (user) {
				throw new Error('email already in use');
			}
		})
		.withMessage('Email already in use'),
	body('firstName').trim().isAlpha().isLength({ min: 1 }).withMessage('invalid first name'),
	body('lastName').trim().isAlpha().isLength({ min: 1 }).withMessage('invalid last name'),
	body('password').trim().isLength({ min: 1 }).withMessage('invalid password'),
	body('confirmPassword')
		.trim()
		.custom((confirmPass, { req }) => {
			return confirmPass === req.body.password;
		})
		.withMessage('password and confirm password do not match'),
];
const postCreate = [
	validateUser,
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render('create', {
				title: 'Club | Create Account',
				errors: errors.array(),
			});
		}
		const { email, firstName, lastName, password } = matchedData(req);

		const hashedPassword = await bcrypt.hash(password, 10);
		await queries.createUser(email, firstName, lastName, hashedPassword);
		res.redirect('/login');
	},
];
const getMembership = (req, res) => {
	res.render('membership', {
		title: 'Club | Membership',
	});
};
const postMembership = async (req, res) => {};
module.exports = { getCreate, postCreate, getMembership, postMembership };
