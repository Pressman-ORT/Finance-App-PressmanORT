import express from 'express';
const app = express();
const port = 3000;

// Add types to `req` and `res`:
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello from Node.js + TypeScript!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});