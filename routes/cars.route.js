import { Router } from "express";
import { getHome } from '../controller/cars.controller.js'

let route = Router()

route.get('/', getHome)

export default route