"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Enable CORS if necessary
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3001', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow the Content-Type header
}));
app.use(body_parser_1.default.json());
app.use('/auth', auth_1.default);
// app.post('/register', (req, res) => {
// 	// Handle registration logic
// 	console.log(res);
// 	res.status(200).json({ message: 'Registration endpoint' });
// });
app.listen(PORT, () => {
    console.log(`Server is runnnsing on port ${PORT}`);
});
