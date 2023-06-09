import axios from "axios";

export const port = process.env.REACT_APP_API_URL;

function getCities() {

    const response = axios.get(`${port}/cities`)
    return response;
}

function getFlights(name) {

    const response = axios.get(`${port}/flights/city/${name}`);
    return response;
}

function getHotels(name) {

    const response = axios.get(`${port}/hosting/city/${name}`);
    return response;
}

function getFlightById(id) {

    const response = axios.get(`${port}/flights/${id}`);
    return response;
}

function filterFlightsByPrice(city, minPrice, maxPrice) {

    const response = axios.get(`${port}/flights/price/${city}/${minPrice}/${maxPrice}`);
    return response;
}

function getHotelById(id) {

    const response = axios.get(`${port}/hosting/${id}`);
    return response;
}

function filterHotelsByPrice(city, minPrice, maxPrice) {

    const response = axios.get(`${port}/hosting/price/${city}/${minPrice}/${maxPrice}`);
    return response;
}

function salveFlight(data) {

    const result = axios.post(`${port}/flights`, data);
    return result;
}

function salveHotel(data) {

    const result = axios.post(`${port}/hosting`, data);
    return result;
}

const apiAuth = { getCities, getFlights, getHotels, getFlightById, filterFlightsByPrice, getHotelById, filterHotelsByPrice, salveFlight, salveHotel };
export default apiAuth;