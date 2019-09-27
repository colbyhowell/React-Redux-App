import axios from "axios";

export const FETCH_BREWERY_START = "FETCH_BREWERY_START";
export const FETCH_BREWERY_SUCCESS = "FETCH_BREWERY_SUCCESS";
export const FETCH_BREWERY_FAIL = "FETCH_BREWERY_FAIL";
export const SET_LOCATION = "SET_LOCATION";

export const getBreweries = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_BREWERY_START });
    setTimeout(() => {
      axios.get(`https://api.openbrewerydb.org/breweries`);
    }, 2000);
  };
};
