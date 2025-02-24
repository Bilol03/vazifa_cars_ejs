import { getData } from "../services/cars.service.js";

let technics = getData('technics')
let clients  = getData('clients')

let getHome = (req, res) => {

  res.render("index", { 
    title: "Avtomobil xizmatlari", 
    technics: technics,
    clients: clients
  });
};


let getAbout = (req, res) => {
  res.render("about", { 
    title: "Avtomobil xizmatlari",
    technics: technics
  });
};

let getService = (req, res) => {
  res.render("service", {
    title: "Avtomobil xizmatlari",
    clients: clients
  });
};

let getbooking = (req, res) => {
  res.render("booking", { title: "Avtomobil xizmatlari" });
};

let team = (req, res) => {
  res.render("team", {
    title: "Avtomobil xizmatlari",
    technics: technics

  });
};

let gettestimonial = (req, res) => {

  res.render("testimonial", { 
    title: "Avtomobil xizmatlari",
    clients: clients
  });
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
