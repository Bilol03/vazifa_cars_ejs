import { Router } from "express";
import {
  getHome,
  getAbout,
  getService,
  getbooking,
  team,
  gettestimonial,
  getContact,
  get404,
} from "../controller/cars.controller.js";

let route = Router();

route
  .get("/", getHome)
  .get("/about", getAbout)
  .get("/service", getService)
  .get("/booking", getbooking)
  .get("/team", team)
  .get("/testimonial", gettestimonial)
  .get("/contact", getContact)
  .get("/404", get404);

export default route;
