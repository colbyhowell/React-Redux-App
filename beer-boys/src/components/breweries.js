import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getBreweries } from "../store/actions/index";

const BreweryList = ({ getBreweries, breweries, isFetching, error }) => {
  useEffect(() => {
    getBreweries();
  }, [getBreweries]);

  const findBrews = e => {
    e.preventDefault();
    getBreweries();
  };

  if (isFetching) {
    return <h2>Locating Brewery</h2>;
  }

  return (
    <>
      <button onClick={findBrews}>Find A Brewery</button>
      <div className="brew-container">
        <div className="brew-name">Brewery:{breweries.name}</div>
        <div className="brew-street">Street: {breweries.street}</div>
        <div className="brew-city">City: {breweries.city}</div>
        <div className="brew-state">State: {breweries.state}</div>
        <div className="brew-site">
          Website: <a href="{breweries.website_url}">{breweries.website_url}</a>
        </div>
      </div>
      <h3>{error}</h3>
    </>
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
  { getBreweries: getBreweries }
)(BreweryList);
