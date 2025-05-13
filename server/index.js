import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (_, res) => {
    res.json({ message: 'Hello from the express server!' });
    console.log('message sent');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});