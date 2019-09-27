import { setState } from "react";
import axios from "axios";

export const FETCH_BREWERY_START = "FETCH_BREWERY_START";
export const FETCH_BREWERY_SUCCESS = "FETCH_BREWERY_SUCCESS";
export const FETCH_BREWERY_FAIL = "FETCH_BREWERY_FAIL";

export const getBreweries = () => {
  const random = Math.floor(Math.random() * 5000 + 1);

  return function(dispatch) {
    dispatch({ type: FETCH_BREWERY_START });
    setTimeout(() => {
      axios
        .get(`https://api.openbrewerydb.org/breweries/${random}`)
        .then(res => {
          console.log(res);
          dispatch({ type: FETCH_BREWERY_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: FETCH_BREWERY_FAIL, payload: err });
        });
    }, 2000);
  };
};
