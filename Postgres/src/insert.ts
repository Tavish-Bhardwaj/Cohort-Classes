import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    // await client.connect("postgresql://bhardwajtavishofficial:rAwn5EF2UQLk@ep-mute-hall-a531y7tj.us-east-2.aws.neon.tech/test?sslmode=require");
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res);
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end();
  }
}

insertData('username5', 'user5@example.com', 'user_password').catch(console.error);