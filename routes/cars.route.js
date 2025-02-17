import { Router } from "express";
import { getHome, getAbout, getService} from '../controller/cars.controller.js'

let route = Router()

route
    .get('/', getHome)
    .get('/about', getAbout)
    .get('/service', getService)



export default route