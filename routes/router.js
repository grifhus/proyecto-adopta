const express = require("express")
const router = express.Router()

const conexion = require("../database/db")
const authController = require("../controllers/authController")

//router para las vistas
//authController.isAuthenticated metodo donde se va a realizar la autentificacion con token
router.get("/", authController.isAuthenticated, (req, res) => {
  res.render("index",{user:req.user})
})
router.get("/sitios", authController.isAuthenticated, (req, res) => {
  res.render("sitios",{user:req.user})
})
router.get("/contact",authController.isAuthenticated, (req, res) => {
  res.render("contact",{user:req.user})
})
router.get("/login", (req, res) => {
  res.render("login",{alert:false})
})
router.get("/register", (req, res) => {
  res.render("register")
})
// router para los metodos del controller
router.post("/register", authController.register)
router.post("/contact", authController.contact)
router.post("/login", authController.login)
router.post("/index", authController.login)
router.post("/sitios", authController.login)
router.get("/logout", authController.logout)

module.exports = router
