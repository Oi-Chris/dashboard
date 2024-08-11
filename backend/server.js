const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { startOfMonth, endOfMonth } = require('date-fns');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/api/data', async (req, res) => {
  try {
    //const result = await pool.query('SELECT * FROM your_table');
    //res.json(result.rows);

    const { range } = req.query;
    let query = '';
    let values = [];

    if ( range === 'current' ) {
        // TODO: make table name & FIX to shadcn
        query =
        `
            SELECT * FROM -table_name-
            WHERE data >= $1
            ORDER by date
        `;
        values = [startOfMonth(new DataTransfer()), endOfMonth(new DataTransfer())]; // FIX
    }
    else {
        query =
        `
            SELECT * FROM -table_name-
            WHERE data >= $1
            ORDER by date
        `;
        values = [subDays(new Date(), parseInt(range))]; // FIX
    }


    const result = await pool.query(query, values);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT;
if (PORT === 5432) {
    console.error(err);
}
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));