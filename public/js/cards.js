const adopta = [
  {
    id: 1,
    tipo: "Perro",
    nombre: "Pascual",
    observacion: "Muy juguetón, amigable y cariñoso. En este momento se encuentra totalmente recuperado y en busca de un hogar responsable que le brinde todo el amor que merece.",
    rasgos: "Tiene el pelo cafe, ademas tiene una patica mala",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2022/07/Tambo-65-600x800.jpeg",
  },
  {
    id: 4,
    tipo: "Gato",
    nombre: "Icaro",
    observacion: "Es un gatico cachorro encontrado en la calle. Ya esta vacunado",
    rasgos: "Es pequeño  y el pelo lo tiene negro",
    img: "http://static.consumer.es/www/imgs/2013/07/adoptar-gatos-cachorros-felinos-animales-mascotas-adopcion-acogida-art.jpg",
  },
  {
    id: 3,
    Tipo: "Perro",
    nombre: "Oreo",
    observacion: "Hoy en día se encuentra dispuesto a encontrar un hogar amoroso y responsable que quiera darle una segunda oportunidad.",
    rasgos: "Pelo blanco con cafe",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2022/09/CocoM-1-400x533.jpeg",
  },
  {
    id: 2,
    Tipo: "Perro",
    nombre: "Sacha",
    observacion: "Busco una familia que ame las aventuras como yo y que esté dispuesta a recibir mucho amor de mi parte porque soy un peludo que ama de forma incondicional.",
    rasgos: "Es un perro criollo y tiene un ojo spr herido",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2022/08/Coyote-2-600x800.jpg",
  },
  {
    id: 5,
    Tipo: "Perro",
    nombre: "Nica",
    observacion: "Rescatada a las afueras de Bogotá, en desnutrición y con heridas en todo su cuerpo. Se recupero y hoy e día esta dispuesta a encontrar un hogar que le de todo el amor que se merece.",
    rasgos: "Es una gata blanca y tiene 6 gaticos cachorros",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2022/07/Lassie-7-400x533.jpeg",
  },
  {
    id: 6,
    Tipo: "Gato",
    nombre: "Selina",
    observacion: "Tamaño pequeña, activa, sociable con otros gatos, aun tiene desconfianza con las personas debido a maltrato   ",
    rasgos: "Es un pechi rojo",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2020/05/Selina_nuevafoto.jpg",
  },
  {
    id: 7,
    Tipo: "Perro",
    nombre: "Scott",
    observacion: "Scott es de tamaño grade, es sociable, cariñosa y muy pila.",
    rasgos: "Tes un labrador  viejito colo cafe ",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2020/05/Ruby-Fundacio%CC%81n-Adopta-No-Compres-300x262.png",
  },
  {
    id: 8,
    Tipo: "Perro",
    nombre: "Toby",
    observacion: "Fue rescatado en Pereira con una neumonía severa, logró recuperarse luego de varios meses. Él está buscando un hogar amoroso y responsable que lo ame para toda la vida.",
    rasgos: "Tiene el pelo cafe  , ademas tiene una patica mala",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2020/05/Milo-4-600x800.jpeg",
  },
  {
    id: 9,
    Tipo: "Gato",
    nombre: "Sass",
    observacion: " Para dar en adopcion",
    rasgos: "Tiene el cabello gris con blanco ",
    img: "http://misanimales.com/wp-content/uploads/2015/01/cascabel-gato.jpg",
  },
  {
    id: 10,
    Tipo: "Gato",
    nombre: "Bootstrap",
    observacion: "Fue rescatada de la calle,  no sabemos cuanto tiempo llevaba recorriendo las calles de Pereira, pero estaba muy agotada detrás de las personas en busca de comida. Su cara pedía ayuda. Fue rescatada y trasladada a la veterinaria, donde se atendió y alimentó.",
    rasgos: "Tiene el pelo cafe  con blanco , ademas tiene una patica mala",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2020/06/Martina-Fundacio%CC%81n-Adopta-No-Compres-300x223.png",
  },
  {
    id: 11,
    Tipo: "Perro",
    nombre: "CSS",
    observacion: "Ha llegado al mejor momento de todos! El momento de buscar un gran hogar.",
    rasgos: "Es cafe con blanco",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2021/12/Libi-5-600x800.jpeg",
  },
  {
    id: 12,
    Tipo: "Perro",
    nombre: "Node",
    observacion: "Ella es de tamaño, mediano/grande es muy sociable, comparte muy bien con otros perros y es muy tierna.",
    rasgos: "Tiene el pelo cafe con negro y ya esta algo  viejito",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2020/05/Shaki-300x200.jpg",
  },
  {
    id: 13,
    Tipo: "Perro",
    nombre: "Toby",
    observacion: "Es de temperamento noble,  tamaño grande, está esterilizada,  muy amigable, tierna y sociable. ",
    rasgos: "Es un perro criollo de color cafe de raza media",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2020/05/Luna_nuevafoto.jpg",
  },
  {
    id: 14,
    Tipo: "Gato",
    nombre: "Tobias",
    observacion: "Para adopcion",
    rasgos: "Es un cachorro",
    img: "http://g.cdn.ecn.cl/fenomenos-paranormales/files/2015/07/gatos-adivinos.jpg",
  },
  {
    id: 15,
    Tipo: "Perro",
    nombre: "Petra",
    observacion: "Su tamaño mediano, es muy tranquila, cariñosa  y alegre. Socializa muy bien con otros perros.",
    rasgos: "Tiene apenas un mes de nacido",
    img: "https://www.adoptanocompres.org/wp-content/uploads/2020/05/Petra_nuevafoto.jpg",
  },
 
]

let card = document.getElementById("card-template")

adopta.map((x) => {
  card.innerHTML += `
    <div class ="col" data-aos="zoom-in">
    <div class="card">
    <img src="${x.img}" class= "card-img-top" alt="${x.nombre}" />
    <div class="card-body">
    <h5 class"card-title text-center text-primary">${x.nombre}</h5>
    <p class"card-text">
   ${x.observacion}
   </p
   </div>
   </div>
   </div> 
    `
})
