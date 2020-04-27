export const API_URL = process.env.REACT_APP_API_URL;
export const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export const GET_ALL_BY_SEARCH = {
    distance: 0,
    minHourRate: 0,
    maxHourRate: 0,
    hasElectricCar: null,
    rate: null
}

export const HTTP_STATUS_CREATED = 201;
export const THANK_YOU_VOTING_MESSAGE = "Thanks for your rating!";
export const VOTING_ERROR_MESSAGE = "Something wrong with your network, please submit again";
export const INITIAL_VOTING_STAR_NUMBER = 3;
export const FITLER_INPUT_ERROR_MESSAGE = "The minimum hourly rate should be smaller than maximum hourly rate";
export const FAKE_LOCATION = {lat: 22.390411, lng: 114.204356};
