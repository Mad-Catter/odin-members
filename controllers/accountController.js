const getCreate = (req, res) => {
	res.render('create', {
		title: 'Club | Create Account',
	});
};
const postCreate = async (req, res) => {};
const getMembership = (req, res) => {
	res.render('membership', {
		title: 'Club | Membership',
	});
};
const postMembership = async (req, res) => {};
module.exports = { getCreate, postCreate, getMembership, postMembership };
