import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getBreweries } from "../store/actions/index";

const BreweryList = ({ getBreweries, breweries, isFetching, error }) => {
  useEffect(() => {
    getBreweries();
  }, [getBreweries]);

  const [location, setLocation] = useState("");

  const updateLocation = e => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <button onClick={() => updateLocation}>Find Breweries</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    breweries: state.breweries,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getBreweries }
)(BreweryList);
