import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import AppRouters from './src/routes/index.js'
dotenv.config()


const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use('/',AppRouters)

app.listen(8000,() => console.log(`Server listening 8000`))
