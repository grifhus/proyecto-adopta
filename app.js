const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const app = express()

// Seteamos el motor de plantillas
app.set("view engine", "ejs")

// Setear la carpeta public
app.use(express.static("public"))

// Configurar node para procesar datos ( formularios, enviar datos)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Seteamos las variables de entorno
dotenv.config({ path: "./env/.env" })

// Para poder trabajar con las cookies
app.use(cookieParser())

// Llamar al router
app.use("/",require("./routes/router"))

// cuando accedamos a la ruta raiz / en el navegador me devuelve hola mundo
// app.get("/", (req, res) => {
//   res.render("index")
// })

// Para eliminar el cache y que no se pueda volver con el boton back luedo ed que hacemos un LOGOUT
app.use(function(req,res,next){
  if(!req.user)
  res.header("Cache-Control","private, no-cache,no-store,must-revalidate")
  next();
})


// Por donde va escuchar nuestro servidor
app.listen(port, () => {
  console.log("SERVER UP running in http://localhost:3000")
})
