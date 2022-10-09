"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configutation the .env file
dotenv_1.default.config();
// Create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define route
app.get('/', (req, res) => {
    // Sent Hello World
    res.send('App Express + TS + Swagger + Mongoose');
});
// Execute APP and listen Requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map