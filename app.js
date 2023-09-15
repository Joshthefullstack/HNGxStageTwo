const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// PostgreSQL database configuration
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'persondb',
  password: 'your_password',
  port: 5432,
});

function handleDatabaseError(err, res) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }

// CREATE: Add a new person
app.post('/api', async (req, res) => {
  const { name, value } = req.body;
  if(name === "" || value === ""){
    res.status(500).json("Name or Value can't be empty")
  }
  const query = 'INSERT INTO persons (name, value) VALUES ($1, $2) RETURNING *';

  try {
    const result = await pool.query(query, [name, value]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    handleDatabaseError(err, res)
  }
});

// READ: Fetch details of a person by ID
app.get('/api/persons/:user_id', async (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM persons WHERE id = $1';

  try {
    const result = await pool.query(query, [id]);
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    handleDatabaseError(err, res)
  }
});

// UPDATE: Modify details of an existing person by ID
app.put('/api/persons/:id', async (req, res) => {
  const id = req.params.id;
  const { name, value } = req.body;
  if(name === "" || value === ""){
    res.status(500).json("Name or Value can't be empty")
  }
  const query = 'UPDATE persons SET name = $1, age = $2 WHERE id = $3 RETURNING *';

  try {
    const result = await pool.query(query, [name, age, id]);
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    handleDatabaseError(err, res)
  }
});

// DELETE: Remove a person by ID
app.delete('/api/persons/:id', async (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM persons WHERE id = $1';

  try {
    const result = await pool.query(query, [id]);
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    handleDatabaseError(err, res)
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
