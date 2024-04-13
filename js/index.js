/** * Definiciones de constantes para poder ligarlas con los archivos independientes de js y poder hacer las cartas */
import {Ruta} from "./entities/Rutas.js";

/*** Crear el arreglo para ruta, caminatas y bicis */
const rutas =[];

/** * Variables que hacen referencia a contenedores*/
const contenedorRutas = document.getElementById("contenedorRutas");

/** no cargar rutas, sin declararlas */
const cargarRutas =() => {
    rutas.push(new Ruta('Descensos', 'Todos los niveles', 'EDO. MEX', 1500, './img/desesos.jpg','Rodada de montaña, se buscará realizar el descenso de tres pistas que están muy bien trazadas y en buenas condiciones.'));
    rutas.push(new Ruta('Linderos', 'Avanzado', 'EDO. MEX', 1700, './img/linderos.jpg','Rodada para bicicletas de ruta'));
    rutas.push(new Ruta('Entrenamiento', 'Principiante', 'EDO. MEX', 1000, './img/entrenamiento.jpg','Entrenamiento en bicicletas de montaña'));
    rutas.push(new Ruta('San Telmo', 'Intermedio', 'EDO. MEX', 1000, './img/santelmo.jpg','Rodada recreativa de montaña para todos los niveles'));
    rutas.push(new Ruta('Paso de Cortes', 'Avanzado', 'EDO. MEX', 1000, './img/cortes.jpg','Rodada para bicicletas de ruta'));
}

const creatEventoReservaRuta = (ruta) => {
    const evento =(ev) => {
        Swal.fire("Suerte en la ruta: "+ ruta.nombre);;
    }

    return evento; 
}

const crearCardRuta =(ruta) => {
    //Boton de Reserva
    let botonReserva = document.createElement("button");
    botonReserva.classList.add("btn");
    botonReserva.classList.add("btn-success");
    botonReserva.innerText="Apartar lugar";
    botonReserva.onclick = creatEventoReservaRuta(ruta);

    //Footer 
    let pieCard =document.createElement("div");
    pieCard.className ="card-footer text-end";
    pieCard.appendChild(botonReserva);

 
    //Imagen

    let imagenRutas = document.createElement("img");
    imagenRutas.src = ruta.urlfoto;
    imagenRutas.className = "card-img-top";
    imagenRutas.alt = ruta.nombre;

    //Cuerpo Card

    let cuerpoCard = document.createElement("div");
    cuerpoCard.className = "card-body";
    cuerpoCard.innerHTML = `
        <h5 class="card-title">${ruta.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${ruta.nivel}</h6>
        <p class="card-text">${ruta.ubicacion}</p>
        <p class="card-text">Costo: $${ruta.precio}</p>
        <h9 class="card-text">${ruta.descripcion}</h9>
        `;

          //Card
    let card= document.createElement("div");
    card.className ='card';
    card.append(imagenRutas);
    card.append(cuerpoCard);
    card.append(pieCard);


    //row
    let celda = document.createElement("div");
    celda.className= "col";
    celda.appendChild(card); 
    
   return card;

}

/** * Se encargara de recorrer la lista de productos y agregar un componente card con la info del producto al contenedor de elementos */
const dibujarCatalogoRutas = () => {
    contenedorRutas.innerHTML=""; 

    rutas.forEach(ruta => {
        let contenedorCarta = crearCardRuta(ruta);
        contenedorRutas.append(contenedorCarta);
    });
};

/** * Ejecucion de funciones */
cargarRutas ();
dibujarCatalogoRutas();


/** *------------------------------DECLARACION DEL SEGUNDO TIPO DE PRODUCTO CAMINATAS--------------------------------------------------------------------------------------- */

import { Caminatas } from "./entities/Caminata.js";
const caminatas = [];
const contenedorCaminatas = document.getElementById("contenedorCaminatas");
const cargarCaminatas = () => {
    caminatas.push(new Caminatas('Tranqui Tequexquinahuac', 'EDO. MEX', 800,'Dirigida a principiantes'));
    caminatas.push(new Caminatas('Entrenamiento', 'EDO. MEX', 800,'Para todos los niveles, esta caminata se divide por pelotones'));
    caminatas.push(new Caminatas('Prevención de incendios', 'EDO. MEX', 800,'Atenderemos la invitación del grupo de los castores de los Scouts'));
    caminatas.push(new Caminatas('Punto trino', 'EDO. MEX', 800));
};

const creatEventoReservaCaminata = (caminata) => {
    const evento = (ev) => {
        Swal.fire("Suerte en la caminata: " + caminata.nombre);
    };
    return evento;
};


const crearCardCaminata = (caminata) => {
    // Botón de Reserva
    let botonReserva = document.createElement("button");
    botonReserva.classList.add("btn");
    botonReserva.classList.add("btn-success");
    botonReserva.innerText = "Apartar lugar";
    botonReserva.onclick = creatEventoReservaCaminata(caminata);

    // Footer de la Card
    let pieCardCaminata = document.createElement("div");
    pieCardCaminata.className = "card-footer text-end";
    pieCardCaminata.appendChild(botonReserva);

   

    // Cuerpo de la Card
    let cuerpoCardCaminata = document.createElement("div");
    cuerpoCardCaminata.className = "card-body";
    cuerpoCardCaminata.innerHTML = `
        <h5 class="card-title">${caminata.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${caminata.lugar}</h6>
        <p class="card-text"> Costo: $${caminata.precio}</p>
        <h9 class="card-text">${caminata.descripcion}</h9>
    `;
    

    // Card completa
    let card = document.createElement("div");
    card.className = 'card';
    card.append(cuerpoCardCaminata);
    card.append(pieCardCaminata);
    card.appendChild(pieCardCaminata);

    // Crear una columna (col) para la tarjeta
    let columna = document.createElement("div");
    columna.className = "col";
    columna.appendChild(card);

    return columna;
};

// Función para dibujar todas las caminatas en el contenedor
const dibujarCatalogoCaminatas = () => {
    contenedorCaminatas.innerHTML = "";

    caminatas.forEach(caminata => {
        let contenedorCarta = crearCardCaminata(caminata);
        contenedorCaminatas.appendChild(contenedorCarta);
    });
};

// Cargar las caminatas y dibujarlas en el contenedor
cargarCaminatas();
dibujarCatalogoCaminatas();


/** *-----------------------------DECLARACION DEL TERCER TIPO DE PRODUCTO BICIS-------------------------------------------------------------------------- */
import { Bicis } from "./entities/Bicicletas.js";

const bicicletas = [];
const contenedorBicis = document.getElementById("contenedorBicis");

const cargaBicis = () => {
    bicicletas.push(new Bicis('Talon', 20000, './img/TALON.jpg'));
    bicicletas.push(new Bicis('MTB (MOUNTAIN BIKE)', 20000, './img/MTBMUJER.jpg'));
    bicicletas.push(new Bicis('BENOTTO', 20000, './img/BENOTTO.jpg'));
    bicicletas.push(new Bicis('LUXTRAIL', 20000, './img/LUXTRAIL.jpg'));
    bicicletas.push(new Bicis('PIQUE29', 20000, './img/PIQUE29.jpg'));
    bicicletas.push(new Bicis('PINARELLOF7', 20000, './img/PINARELLOF7.jpg'));
};

const creatEventoComprarBicis = (bicis) => {
    const evento = (ev) => {
        Swal.fire("Buena Compra " + bicis.nombre);
    };
    return evento;
};

const crearCardBicis = (bicis) => {
    // Botón de comprar
    let botonCompra = document.createElement("button");
    botonCompra.classList.add("btn", "btn-success");
    botonCompra.innerText = "Comprar";
    botonCompra.onclick = creatEventoComprarBicis (bicis);


    // Cuerpo de la Card
    let cuerpoCardBicis = document.createElement("div");
    cuerpoCardBicis.className = "card-body";
    cuerpoCardBicis.innerHTML = `
        <h5 class="card-title">${bicis.nombre}</h5>
        <h6 class="card-text">Costo: $${bicis.precio}</h6>
    `;

    // Imagen de la Bicicleta
    let imagenBici = document.createElement("img");
    imagenBici.src = bicis.urlfoto;
    imagenBici.className = "card-img-top";
    imagenBici.alt = bicis.nombre;

    // Footer de la Card
    let pieCardBicis = document.createElement("div");
    pieCardBicis.className = "card-footer text-end";
    pieCardBicis.appendChild(botonCompra);

    // Card completa
    let card = document.createElement("div");
    card.className = 'card';
    card.appendChild(imagenBici); // Agregar la imagen al card-body
    card.appendChild(cuerpoCardBicis);
    card.appendChild(pieCardBicis);

    // Crear una columna (col) para la tarjeta
    let columna = document.createElement("div");
    columna.className = "col";
    columna.appendChild(card);

    return columna;
};

// Función para dibujar todas las bicicletas en el contenedor
const dibujarCatalogoBicis = () => {
    contenedorBicis.innerHTML = "";

    bicicletas.forEach(bicis => {
        let contenedorCarta = crearCardBicis(bicis);
        contenedorBicis.appendChild(contenedorCarta);
    });
};

// Cargar las bicicletas y dibujarlas en el contenedor
cargaBicis();
dibujarCatalogoBicis();

