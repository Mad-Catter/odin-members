import pool from './pool.js';

const createTables = `CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    member BOOLEAN,
    admin BOOLEAN
);
CREATE TABLE IF NOT EXISTS messages ( 
    message_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255),
    content TEXT,
    user_id INTEGER REFERENCES users(user_id),
    timestamp TIMESTAMP
);
`;

pool.query(createTables);
