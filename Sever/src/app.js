
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import routerProduct from './Routers/products';
import categoryRouetr from './Routers/category'
import routeAuth from './Routers/auth';

const app = express();

//middleware
app.use(morgan('tiny'));
app.use(express.json())
app.use(cors())

//router
app.use("/api",routerProduct)
app.use("/api",categoryRouetr)
app.use("/api",routeAuth)

// connect db 
mongoose.connect("mongodb://localhost:27017/AssNextjs")
    .then(() => {
        console.log("Connect db successfuly")
    })
    .catch(error => console.log(error))
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running PORT:",PORT)
})