# Proyecto-adopta


## Development

## Install the project 📋🔧
```sh
$ git clone https://github.com/grifhus/proyecto-turismo
$ cd proyecto-turismo
# install node
$ npm init -y 
# install dependencies
$ npm i express bcryptjs cookie-parser dotenv ejs jsonwebtoken mysql express-session
```

## Build the project 🚀

Pending
```sh
Pending
```
## Authors ✒️
Mention all those who helped to raise the project from its beginnings.

- David Julian Jaramillo - Trabajo Inicial - Grifhus
- David Julian Jaramillo - Documentación - Grifhus

### How to help ?
You can contact a developer of the project as [Grifhus](https://github.com/grifhus).
Then you can create a pull request to add or fix features, you can also submit improvement idea or bug issue in the [issues section](https://github.com/grifhus/proyecto-turismo/issues).


## El propósito de este diseño es asegurar el cálculo correcto de la ruta.

```


├── controllers                    
|   ├── authController.js         METODOS PARA CONTROLAR NUESTRA LOGICA
|
├── database                      
|   ├── db.js                     CONEXION A LA BASE DE DATOS             
|
├── env                
|   └──.env                       VARIABLES DE ENTORNO
|
├── public
|   ├── css                  
|   |    ├── aos.css
|   |    ├── bootstrap.min.css    CSS DEL PROYECTO
|   |    ├── carousel.css 
|   |    ├── signin.css
|   |    ├── styles.css
|   |
|   ├── img                  
|   |    ├── imagenes             IMAGENES
|   |
|   ├── js                  
|       ├── aos.js
|       ├── bootstrap.im.js       FUNCIONALIDADES Y ANIMACIONES
|       ├── cards.js
|
├── routes
|   ├── router.js                 ENTURADOR       
|
├── views       
|   ├── adopta.ejs        
|   ├── contact.ejs   
|   ├── index.ejs                 VISTAS DE CADA PAGINA
|   ├── login-ejs   
|   ├── register-ejs  
|   |
|   ├── layout                  
|       ├── footer.ejs    
|       └── header.ejs            HEADER Y FOOTER PARA CADA PAGINA
|       └── header2.ejs
|
├── app.js                        CONFIGURACIONES       

