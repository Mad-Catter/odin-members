const passport = require('passport');
const getLogin = (req, res) => {
	const errors = req.session.messages || null;
	// For some reason this does not clear until you successfully login.  However this means an error will remain if the user clicks off login then clicks back on later.
	// So I am manually clearing it.  This does mean I have to have login check that the array is not empty before rendering login-errors however.
	req.session.messages = [];
	res.render('login', {
		title: 'Club login',
		errors,
	});
};
const postLogin = passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureMessage: true,
});
const getLogout = (req, res, next) => {
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	});
};

module.exports = { getLogin, postLogin, getLogout };
