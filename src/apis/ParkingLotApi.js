import axios from 'axios';

class ParkingLotApi {

    static getAllParkingLotList(){
        const GET_URL ="https://5ea2968bb9f5ca00166c2d36.mockapi.io/parking-lots";
        return axios.get(GET_URL);

    }

    static getParkingLotById(id){
        const GET_BY_ID_URL ="https://5ea2968bb9f5ca00166c2d36.mockapi.io/parking-lots/"+id;
        return axios.get(GET_BY_ID_URL);

    }

    static postParkingRatingById(id, score) {
        const POST_BY_ID_URL = "https://easy-park-backend-dev.herokuapp.com/parking-lots/"+id+"/ratings";
        return axios.post(POST_BY_ID_URL, {score: score});
    }
}

export default ParkingLotApi;