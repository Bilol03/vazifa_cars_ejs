import express from 'express'
import path from 'path'
import cors from 'cors'
import ejs from 'ejs'

let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(express.static(path.join(process.cwd(), "public")))
app.use(cors('*'))
app.set("view engine", "ejs");
app.set("views", "./public/views");

import carsRoute from '../routes/cars.route.js' 

app.use(carsRoute)


export { app }