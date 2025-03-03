import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import projectRoutes from './routes/projectRoutes'

// Load environment variables
dotenv.config()

connectDB()

const app = express()

app.use(express.json()) /* Middleware to parse JSON data */

/* Routes */
app.use('/api/projects', projectRoutes)

export default app