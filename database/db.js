const mysql = require("mysql")

const conexion = mysql.createConnection({
  host: process.env.BD_HOST,
  user: process.env.BD_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
})

conexion.connect((error) => {
  if (error) {
    console.log("El Error de la conexion es: " + error)
  }
  console.log("Conectado a la base de datos MYSQL")
})


conexion.on('error', err => {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // db error reconnect
      disconnect_handler();
  } else {
      throw err;
  }
});
module.exports = conexion
