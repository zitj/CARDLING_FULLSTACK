// server.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS if necessary
app.use(express.json());
app.use(
	cors({
		origin: process.env.CORS_ORIGIN || 'http://localhost:3001', // Allow requests from this origin
		methods: ['GET', 'POST'], // Allow only GET and POST requests
		allowedHeaders: ['Content-Type'], // Allow the Content-Type header
	})
);

app.use(bodyParser.json());
app.use('/auth', authRoutes);
// app.post('/register', (req, res) => {
// 	// Handle registration logic
// 	console.log(res);
// 	res.status(200).json({ message: 'Registration endpoint' });
// });

app.listen(PORT, () => {
	console.log(`Server is runnnsing on port ${PORT}`);
});
