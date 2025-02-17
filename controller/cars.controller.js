import { getData } from "../services/cars.service.js";

let getHome = (req, res) => {
  let datas = getData("data");
  res.render("index", { title: "Avtomobil xizmatlari", datas: datas });
};

let getAbout = (req, res) => {
  res.render("about", { title: "Avtomobil xizmatlari" });
};

let getService = (req, res) => {
  res.render("service");
};

let getbooking = (req, res) => {
  res.render("booking", { title: "Avtomobil xizmatlari" });
};

let team = (req, res) => {
  res.render("team", { title: "Avtomobil xizmatlari" });
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
