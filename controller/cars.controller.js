import { getData } from "../services/cars.service.js";

let getHome = (req, res) => {
    let datas = getData('data')
    res.render('index', {title: "Avtomobil xizmatlari", datas: datas})
}

let getAbout = (req, res) => {
  res.render("about", { title: "Avtomobil xizmatlari" });
};

let getService = (req, res) => {
  res.render("service");
};

let getbooking = (req, res) => {
  res.render("booking", { title: "Avtomobil xizmatlari" });
};

export { getHome, getAbout, getService, getbooking };
