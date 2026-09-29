const getIndex = (req, res) => {
	res.render('index', {
		title: 'Club | Home',
	});
};
const getCreate = (req, res) => {
	// res.render('create', {
	//     title: 'Club | Create Message',
	// });
};
const postCreate = async (req, res) => {};

module.exports = { getIndex, getCreate, postCreate };
