const passport = require('passport');
const getLogin = (req, res) => {
	res.render('login', {
		title: 'Club login',
	});
};
// THESE WERE COPY PASTED FROM MY NOTES.  THIS NEEDS TO BE CHECKED TO ENSURE IT ACTUALLY WOKRS
const postLogin = passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/',
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
