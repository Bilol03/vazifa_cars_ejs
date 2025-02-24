import { getData } from "../services/cars.service.js";

let getHome = (req, res) => {
  let services = getData('service')
  let technics = getData('technics')
  
  res.render("index", { 
    title: "Avtomobil xizmatlari", 
    services: services,
    technics: technics
  });
};


let getAbout = (req, res) => {
  let technics = getData('technics')
  res.render("about", { 
    title: "Avtomobil xizmatlari",
    technics: technics
  });
};

let getService = (req, res) => {
  res.render("service", {title: "Avtomobil xizmatlari" });
};

let getbooking = (req, res) => {
  res.render("booking", { title: "Avtomobil xizmatlari" });
};

let team = (req, res) => {
  let technics = getData('technics')

  res.render("team", {
    title: "Avtomobil xizmatlari",
    technics: technics

  });
};

let gettestimonial = (req, res) => {
  res.render("testimonial", { title: "Avtomobil xizmatlari" });
};

let getContact = (req, res) => {
  res.render("contact", { title: "Avtomobil xizmatlari" });
};

let get404 = (req, res) => {
  res.render("404", { title: "Avtomobil xizmatlari" });
};

export {
  getHome,
  getAbout,
  getService,
  getbooking,
  team,
  gettestimonial,
  getContact,
  get404,
};
