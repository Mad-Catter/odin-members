const pool = require('./pool');

const selectUserByEmail = async (email) => {
	const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
	return result.rows[0];
};

const createUser = async (email, firstName, lastName, password) => {
	const result = await pool.query(
		`INSERT INTO users (email, first_name, last_name, password) VALUES ($1, $2, $3, $4)`,
		[email, firstName, lastName, password],
	);
	return result;
};

module.exports = { selectUserByEmail, createUser };
