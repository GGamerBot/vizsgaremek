// Backend Structure for CYOA Game Creator
 
import express, { Request, Response } from 'express';
import { Pool } from 'pg';
 
const app = express();
const PORT = process.env.PORT || 5000;
 
// Middleware
app.use(express.json());
 
// PostgreSQL connection setup
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'cyoa_game',
  password: 'your_password',
  port: 5432,
});
 
// Routes
 
// 1. Users
app.post('/users', async (req: Request, res: Response) => {
  const { username, profilePicture } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (username, profile_picture) VALUES ($1, $2) RETURNING *',
      [username, profilePicture]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
app.get('/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
// 2. Games
app.post('/games', async (req: Request, res: Response) => {
  const { creatorId, title } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO games (creator_id, title) VALUES ($1, $2) RETURNING *',
      [creatorId, title]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
app.get('/games/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM games WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Game not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
// 3. Screens
app.post('/screens', async (req: Request, res: Response) => {
  const { gameId, content } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO screens (game_id, content) VALUES ($1, $2) RETURNING *',
      [gameId, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
// 4. Connections
app.post('/connections', async (req: Request, res: Response) => {
  const { screen1, screen2, condition } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO connections (screen1, screen2, condition) VALUES ($1, $2, $3) RETURNING *',
      [screen1, screen2, condition]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
// 5. Items
app.post('/items', async (req: Request, res: Response) => {
  const { gameId, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO items (game_id, description) VALUES ($1, $2) RETURNING *',
      [gameId, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
// 6. Leaderboard
app.get('/leaderboard', async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT username, score FROM users ORDER BY score DESC LIMIT 10'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
// Start the server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
