import React from "react";

export const BreweryLocations = props => {
  console.log(props);
  return (
    <div className="location-box">
      {props.locations.map(b => {
        return b.name;
      })}
    </div>
  );
};
