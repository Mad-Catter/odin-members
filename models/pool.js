const { Pool } = require('pg');
const { loadEnvFile } = require('node:process');
if (process.env.NODE_ENV !== 'production') {
	process.loadEnvFile();
}
const connectionURL = process.env.CONNECTION_STRING;
const pool = new Pool({
	connectionString: connectionURL,
});

module.exports = pool;
