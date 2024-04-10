/**
 * Definiciones de constantes 
 */

import { Caminatas } from "./entities/Caminata";



/**
 * Se encarga de cargar los productos. en este momento es estatico pero la idea es hacer una carga dinamica 
 */
const cargarRutas =() => {
    Ruta.push(new Ruta('Descensos', 'EDO. MEX', 1500, './img/desesos.jpg', 'Rodada nocturna' ));
    Ruta.push(new Ruta('Linderos', 'EDO. MEX', 1700, './img/linderos.jpg', 'Rodada matutina' ));
    Ruta.push(new Ruta('Entrenamiento', 'EDO. MEX', 1000, './img/entrenamiento.jpg', 'Trabajo de reduccion de tiempos' ));
    Ruta.push(new Ruta('San Telmo', 'EDO. MEX', 1000, './img/santelmo.jpg', 'Rodada MTB' ));
    Ruta.push(new Ruta('Paso de Cortes', 'EDO. MEX', 1000, './img/cortes.jpg', 'Rodada matutina' ));
}

const cargarCaminatas =() => {
    Caminatas.push(new Caminata('Tranqui_Tequexquinahuac', 'EDO. MEX', 800, 'Caminata matutina' ));
    Caminatas.push(new Caminata('Entrenamiento', 'EDO. MEX', 800, 'Mejora de técnica' ));
    Caminatas.push(new Caminata('Prevención de incendios', 'EDO. MEX', 800, 'Grupo scout de San Luis Huexotla' ));
    Caminatas.push(new Caminata('Punto trino', 'EDO. MEX', 800, 'Caminata matutina' ));

}

const cargaBicis =() => {
    Bicis.push(new Bici('Talon', 20000, './img/TALON.jpg', 'Rigida de aluminio con suspension ofrece un manejo equilibrado y seguro en el camino' ));
    Bicis.push(new Bici('MTB (MOUNTAIN BIKE)', 20000, './img/MTBMUJER.jpg', 'Con cuadro de aluminio calidad ALUXX y una tijera de suspensión de 100 mm de recorrido.' ));
    Bicis.push(new Bici('BENOTTO', 20000, './img/BENOTTO.jpg', 'Unisex, Marca benotto, de aluminio, 14 velocidades' ));
    Bicis.push(new Bici('LUXTRAIL', 20000, './img/LUXTRAIL.jpg', 'Pedalea a toda velocidad y con total confianza sobre esta bicicleta down country. Con espacio de almacenamiento interno en el cuadro,suspensión FOX y tija telescópica,sube el nivel de tus rutas mtb con la Lux Trail CF 6.' ));
    Bicis.push(new Bici('PIQUE29', 20000, './img/PIQUE29.jpg', 'Rines de 29 pulgadas, recorrido de 100 mm, dropper y cuadro de aluminio' ));
    Bicis.push(new Bici('PINARELLOF7', 20000, './img/PINARELLOF7.jpg', 'Cuadro de carbon, transmisión Shimano Ultegra Di2' ));
}
