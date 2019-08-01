const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;


//console.log(argv.direccion);

/* lugar.getLatLng(argv.direccion)
    .then(resp => console.log(resp)); */
/* 
clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {

    try {

        const coord = await lugar.getLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de ${ coord.direccion } es de ${ temp }`;

    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);