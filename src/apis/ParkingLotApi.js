import axios from 'axios';
import { API_URL } from '../constant/constants';

const queryString = require('query-string');

class ParkingLotApi {

    static getAllParkingLotList(distance, minHourRate, maxHourRate, hasElectricCar, rate){
        let GET_URL = `${API_URL}/parking-lots`

        let parsed = {};

        if (distance!==0){
            parsed['distance'] = distance;
        }

        if (minHourRate!==0){
            parsed['priceFrom'] = minHourRate;
        }

        if (maxHourRate!==0){
            parsed['priceTo'] = maxHourRate;
        }

        if (rate!==null){
            parsed['ratingOrder'] = rate;
        }

        if (hasElectricCar!==null){
            parsed['needCharge'] = hasElectricCar;
        }

        const stringified = "?" + queryString.stringify(parsed);
        GET_URL = GET_URL+stringified;
        return axios.get(GET_URL);

    }

    static getParkingLotById(id){
        const GET_BY_ID_URL = `${API_URL}/parking-lots/${id}`;
        return axios.get(GET_BY_ID_URL);

    }

    static postParkingRatingById(id, score) {
        const POST_BY_ID_URL = `${API_URL}/parking-lots/${id}/ratings`;
        return axios.post(POST_BY_ID_URL, {score: score});
    }
}

export default ParkingLotApi;