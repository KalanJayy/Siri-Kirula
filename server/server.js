import express from 'express'
import "dotenv/config";
import cors from "cors"

// Initialize Express App
const app = express()

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> res.send("server is running"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))
