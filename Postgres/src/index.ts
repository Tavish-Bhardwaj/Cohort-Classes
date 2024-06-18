//write a function to create a users table in a database.
import {Client} from "pg";

const client = new Client({
    connectionString:"postgresql://bhardwajtavishofficial:rAwn5EF2UQLk@ep-mute-hall-a531y7tj.us-east-2.aws.neon.tech/test?sslmode=require"
});

async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
console.log(result);
}