const axios = require('axios');

const getClima = async(lat, lng) => {

    const temp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b98044d4110b02c8c7f05b6452e387dc&units=metric`);

    return temp.data.main.temp;


}

module.exports = {
    getClima
}