const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcryptjs = require('bcryptjs');
const queries = require('../models/queries');

passport.use(
	new LocalStrategy(async (username, password, done) => {
		try {
			const user = await queries.selectUserByEmail(username);
			if (!user) {
				return done(null, false, { message: 'Incorrect Username' });
			}
			const matchingPassword = await bcryptjs.compare(password, user.password);
			if (!matchingPassword) {
				return done(null, false, { message: 'Wrong Password' });
			}
			return done(null, user);
		} catch (err) {
			return done(err);
		}
	}),
);

passport.serializeUser((user, done) => done(null, user.user_id));
passport.deserializeUser(async (id, done) => {
	try {
		const user = await queries.selectUserById(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});
