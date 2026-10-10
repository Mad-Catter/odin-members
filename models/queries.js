const pool = require('./pool');

const selectUserByEmail = async (email) => {
	const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
	return result.rows[0];
};

const selectUserById = async (id) => {
	const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
	return result.rows[0];
};

const createUser = async (email, firstName, lastName, password) => {
	const result = await pool.query(
		`INSERT INTO users (email, first_name, last_name, password) VALUES ($1, $2, $3, $4)`,
		[email, firstName, lastName, password],
	);
	return result;
};

const updateMembership = async (id) => {
	const result = await pool.query(`UPDATE users SET member = true WHERE user_id = $1`, [id]);
	return result;
};
const updateAdmin = async (id) => {
	const result = await pool.query(`UPDATE users SET admin = true WHERE user_id = $1`, [id]);
	return result;
};

const createMessage = async (title, content, user_id) => {
	const result = await pool.query(`INSERT INTO messages (title, content, user_id, timestamp) VALUES ($1, $2, $3, $4)`, [
		title,
		content,
		user_id,
		new Date(),
	]);
	return result;
};
const deleteMessageById = async (message_id) => {
	const result = await pool.query(`DELETE FROM messages WHERE message_id = $1`, [message_id]);
	return result;
};
const selectTenMessages = async (offset) => {
	const results = await pool.query(`SELECT * FROM messages LIMIT 10 OFFSET (10 * $1)`, [offset]);
	return results.rows;
};

module.exports = {
	selectUserByEmail,
	selectUserById,
	createUser,
	updateMembership,
	updateAdmin,
	createMessage,
	deleteMessageById,
	selectTenMessages,
};
