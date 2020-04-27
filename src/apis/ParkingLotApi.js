import axios from 'axios';
import { API_URL } from '../constant/constants';

const queryString = require('query-string');

class ParkingLotApi {

    static getAllParkingLotList(distance, minHourRate, maxHourRate, hasElectricCar, rate){

        let parsed = {
            distance: distance,
            priceFrom: minHourRate,
            priceTo: maxHourRate,
            ratingOrder: rate
        }
        const stringified = "?" + queryString.stringify(parsed);
        const GET_URL = `${API_URL}/parking-lots`+stringified;
        return axios.get(GET_URL);

    }

    static getParkingLotById(id){
        const GET_BY_ID_URL = `${API_URL}/parking-lots/${id}`;
        return axios.get(GET_BY_ID_URL);

    }
}

export default ParkingLotApi;