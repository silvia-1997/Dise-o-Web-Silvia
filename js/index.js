/**
 * Definiciones de constantes para poder ligarlas con los archivos independientes de js y poder hacer las cartas
 */

import {Ruta} from "./entities/Rutas.js";

/**
 * Establece el monto en pesos 
 */

const formatoPesosMexicanos = new Intl.NumberFormat('es-MX');

/**
 * Crear el arreglo para ruta, caminatas y bicis
 */

const rutas =[];

/**
 * Variables que hacen referencia a contenedores  
 */

const contenedorRutas = document.getElementById("contenedorRutas");

/** no cargar rutas, sin declararlas */
const cargarRutas =() => {
    rutas.push(new Ruta('Descensos', 'Todos los niveles', 'EDO. MEX', 1500, './img/desesos.jpg'));
    rutas.push(new Ruta('Linderos', 'Avanzado', 'EDO. MEX', 1700, './img/linderos.jpg'));
    rutas.push(new Ruta('Entrenamiento', 'Principiante', 'EDO. MEX', 1000, './img/entrenamiento.jpg'));
    rutas.push(new Ruta('San Telmo', 'Intermedio', 'EDO. MEX', 1000, './img/santelmo.jpg'));
    rutas.push(new Ruta('Paso de Cortes', 'Avanzado', 'EDO. MEX', 1000, './img/cortes.jpg'));
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
        <h7 class="card-text">${ruta.ubicacion}</h7>
        <h8 class="card-text">$${formatoPesosMexicanos.format(ruta.precio)}</h8>
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

/**
 * Se encargara de recorrer la lista de productos y agregar un componente card con la info del producto al contenedor de elementos
 */

const dibujarCatalogoRutas = () => {
    contenedorRutas.innerHTML=""; 

    rutas.forEach(ruta => {
        let contenedorCarta = crearCardRuta(ruta);
        contenedorRutas.append(contenedorCarta);
    });
};

/**
 * Ejecucion de funciones
 */
cargarRutas ();
dibujarCatalogoRutas();



/**
 *----------------------------------------------------------------------------------------------------------------------------
 */

 const cargarCaminatas =() => {
    caminatas.push(new Caminata('Tranqui Tequexquinahuac', 'EDO. MEX', 800, 'Caminata matutina' ));
    caminatas.push(new Caminata('Entrenamiento', 'EDO. MEX', 800, 'Mejora de técnica' ));
    caminatas.push(new Caminata('Prevención de incendios', 'EDO. MEX', 800, 'Grupo scout de San Luis Huexotla' ));
    caminatas.push(new Caminata('Punto trino', 'EDO. MEX', 800, 'Caminata matutina' ));

}

/**
 *----------------------------------------------------------------------------------------------------------------------------
 */

const cargaBicis =() => {
    bicis.push(new Bicis('Talon', 20000, './img/TALON.jpg', 'Rigida de aluminio con suspension ofrece un manejo equilibrado y seguro en el camino' ));
    bicis.push(new Bici('MTB (MOUNTAIN BIKE)', 20000, './img/MTBMUJER.jpg', 'Con cuadro de aluminio calidad ALUXX y una tijera de suspensión de 100 mm de recorrido.' ));
    bicis.push(new Bici('BENOTTO', 20000, './img/BENOTTO.jpg', 'Unisex, Marca benotto, de aluminio, 14 velocidades' ));
    bicis.push(new Bici('LUXTRAIL', 20000, './img/LUXTRAIL.jpg', 'Pedalea a toda velocidad y con total confianza sobre esta bicicleta down country. Con espacio de almacenamiento interno en el cuadro,suspensión FOX y tija telescópica,sube el nivel de tus rutas mtb con la Lux Trail CF 6.' ));
    bicis.push(new Bici('PIQUE29', 20000, './img/PIQUE29.jpg', 'Rines de 29 pulgadas, recorrido de 100 mm, dropper y cuadro de aluminio' ));
    bicis.push(new Bici('PINARELLOF7', 20000, './img/PINARELLOF7.jpg', 'Cuadro de carbon, transmisión Shimano Ultegra Di2' ));
}



