import axios from 'axios';

class ParkingLotApi {

    static getAllParkingLotList(){
        const GET_URL ="https://5ea2968bb9f5ca00166c2d36.mockapi.io/parking-lots";
        return axios.get(GET_URL);

    }
}

export default ParkingLotApi;