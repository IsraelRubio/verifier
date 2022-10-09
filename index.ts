import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Configutation the .env file
dotenv.config();

// Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define route
app.get('/', (req: Request, res: Response) => {
    // Sent Hello World
    res.send('App Express + TS + Swagger + Mongoose');
});

// Execute APP and listen Requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})