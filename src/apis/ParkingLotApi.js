import axios from 'axios';
import { API_URL } from '../constant/constants';

class ParkingLotApi {

    static getAllParkingLotList(distance, minHourRate, maxHourRate, hasElectricCar, rate){
        let PARAM = '';
        if (minHourRate!==0){
            PARAM = PARAM + '?priceFrom=' + minHourRate;
        }
        const GET_URL = `${API_URL}/parking-lots`+PARAM;
        console.log(GET_URL);
        return axios.get(GET_URL);

    }

    static getParkingLotById(id){
        const GET_BY_ID_URL = `${API_URL}/parking-lots/${id}`;
        return axios.get(GET_BY_ID_URL);

    }
}

export default ParkingLotApi;