"use strict";
// src/routes/auth.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const connection_1 = __importDefault(require("../db/connection"));
const router = express_1.default.Router();
// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the user already exists
        const userExistsQuery = 'SELECT * FROM users WHERE username = $1 OR email = $2';
        const userExistsValues = [username, email];
        const { rows } = await connection_1.default.query(userExistsQuery, userExistsValues);
        if (rows.length > 0) {
            console.log('Vec postoji takav korisnikk! :(');
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        // Create a new user
        const newUserQuery = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
        const newUserValues = [username, email, hashedPassword];
        const result = await connection_1.default.query(newUserQuery, newUserValues);
        const newUser = result.rows[0];
        // delete newUser.password; // Remove password from the response
        res.status(201).json(newUser);
        console.log('Uspelo jeee! ^_^');
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = router;
