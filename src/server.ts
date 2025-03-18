import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';

const app: Application = express();
const PORT = process.env.EXPRESS_PORT || '3001';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
