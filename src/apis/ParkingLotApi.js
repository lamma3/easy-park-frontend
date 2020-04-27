import axios from 'axios';
import { API_URL } from '../constant/constants';

class ParkingLotApi {

    static getAllParkingLotList(distance, minHourRate, maxHourRate, hasElectricCar, rate){
        const GET_URL = `${API_URL}/parking-lots`;
        return axios.get(GET_URL);

    }

    static getParkingLotById(id){
        const GET_BY_ID_URL = `${API_URL}/parking-lots/${id}`;
        return axios.get(GET_BY_ID_URL);

    }
}

export default ParkingLotApi;