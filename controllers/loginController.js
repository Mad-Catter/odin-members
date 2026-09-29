const getLogin = (req, res) => {
	res.render('/', {
		title: 'Club login',
	});
};
const postLogin = async (req, res) => {};
const getLogout = (req, res) => {};

module.exports = { getLogin, postLogin, getLogout };
