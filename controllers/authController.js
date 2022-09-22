// aqui vamos a crear los metodos, prodecimientos para controlar toda neustra logica
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")
const conexion = require("../database/db")
// vamos a indicarle a nodejs que vamos a utilizar promesas
const { promisify } = require("util")

// Metodo para registrarnos
//capturar nombre usuario password
exports.register = async (req, res) => {
  try {
    const name = req.body.name
    const user = req.body.user
    const pass = req.body.pass
    console.log(name + "-" + user + "-" + pass)
    let passHash = await bcryptjs.hash(pass, 8)
    console.log(passHash)
    //al utilizar query ya podemos realizar sentencias sql con node
    conexion.query(
      "INSERT INTO users SET ?",
      {
        user: user,
        name: name,
        pass: passHash,
      },
      (error, result) => {
        if (error) {
          console.log(error)
        }
        res.redirect("/")
      }
    )
  } catch (error) {
    console.log(error)
  }
}
//metodo para contacto
exports.contact = async (req, res) => {
  try {
    const nombre = req.body.nombre
    const email = req.body.email
    const telefono = req.body.telefono
    const mensaje = req.body.mensaje
    console.log(nombre + "-" + email + "-" + telefono+ "-"+ mensaje)
    //al utilizar query ya podemos realizar sentencias sql con node
    conexion.query(
      "INSERT INTO contact SET ?",
      {
        nombre: nombre,
        email: email,
        telefono: telefono,
        mensaje:mensaje,
      },
      (error, result) => {
        if (error) {
          console.log(error)
        }
        res.redirect("/")
      }
    )
  } catch (error) {
    console.log(error)
  }
}




// Metodo para login
exports.login = async (req, res) => {
  try {
    //capturamos datos del user y pass
    const user = req.body.user
    const pass = req.body.pass
    // console.log(user + "-" + pass)
    if (!user || !pass) {
      res.render("login", {
        alert: true,
        alertTitle: "Advertencia",
        alertMessage: "Ingrese un Usuario y Password",
        alertIcon: "info",
        showConfirmButton: true,
        timer: false,
        ruta: "login",
      })
    } else {
      conexion.query(
        "SELECT * FROM users WHERE user = ?",
        [user],
        //comparar la pass con el hashing
        async (error, results) => {
          if (
            results.length == 0 ||
            !(await bcryptjs.compare(pass, results[0].pass))
          ) {
            res.render("login", {
              alert: true,
              alertTitle: "Error",
              alertMessage: "Usuario o Password incorrecto",
              alertIcon: "error",
              showConfirmButton: true,
              timer: false,
              ruta: "login",
            })
          } else {
            //inicio de sesion ok
            const id = results[0].id
            const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
              expiresIn: process.env.JWT_TIEMPO_EXPIRA,
            })
            // Generamos el token sin fecha  de expiracion
            // const token =jwt.sign({id:id},process.env.JWT_SECRETO,{
            console.log("TOKEN: " + token + "para el USUARIO: " + user)
            const cookiesOptions = {
              expires: new Date(
                Date.now() +
                  process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
              ),
              httpOnly: true,
            }
            res.cookie("jwt", token, cookiesOptions)
            res.render("login", {
              alert: true,
              alertTitle: "Conexión exitosa",
              alertMessage: "LOGIN CORRECTO",
              alertIcon: "success",
              showConfirmButton: false,
              timer: 800,
              ruta: "",
            })
          }
        }
      )
    }
  } catch (error) {
    console.log(error)
  }
}

exports.isAuthenticated = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRETO
      )
      conexion.query(
        "SELECT * FROM users WHERE id = ?",
        [decodificada.id],
        (error, results) => {
          if (!results) {
            return next()
          }
          req.user = results[0]
          return next()
        }
      )
    } catch (error) {
      console.log(error)
      return next()
    }
  } else {
    res.redirect("/login")
     }
}
// logout eliminar cookie y nos redirig e a la ruta raiz
exports.logout = (req, res) => {
  res.clearCookie("jwt")
  return res.redirect("/")
}
