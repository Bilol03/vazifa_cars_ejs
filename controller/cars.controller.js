import { getData } from "../services/cars.service.js"

let getHome = (req, res) => {
    res.render('index', {title: "Avtomobil xizmatlari"})
}

let getAbout = (req, res) => {
    res.render('about', {title: "Avtomobil xizmatlari"})
}

let getService = (req, res) => {
    res.render('service')
}

export {
    getHome,
    getAbout,
    getService,

}