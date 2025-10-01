import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDBWithRetry from './models/db.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;
ConnectDBWithRetry();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (_, res) => {
    res.json({ message: 'Hello from the express server!' });
    console.log('message sent');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});