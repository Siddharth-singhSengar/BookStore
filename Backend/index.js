import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookroute from './routes/book_routes.js'
import userroute from './routes/User_routes.js'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors())

const PORT = process.env.PORT || 4000
const URI = process.env.MONGO_URL ;


try {
    mongoose.connect(URI, {
        
        
    });
    console.log("Connected to mongoDB")
    
    
} catch (error) {
    
    console.log("Error:" , error)
    
}
app.use(express.json());

app.use('/book',bookroute)
app.use('/user',userroute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})