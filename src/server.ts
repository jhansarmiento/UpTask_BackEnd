import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'

// Load environment variables
dotenv.config()

connectDB()

const app = express()

export default app