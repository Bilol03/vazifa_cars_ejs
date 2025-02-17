import { Router } from "express";
import {
  getHome,
  getAbout,
  getService,
  getbooking,
} from "../controller/cars.controller.js";

let route = Router();

route
  .get("/", getHome)
  .get("/about", getAbout)
  .get("/service", getService)
  .get("/booking", getbooking);

export default route;
