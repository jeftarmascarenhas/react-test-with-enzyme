import React from "react";
import PropTypes from "prop-types";

import { Temperature, City, Temp } from "./styled";

const TemperatureComponent = ({ temp, city, toggleForecast }) => {
  return (
    <Temperature
      onClick={e => {
        e.preventDefault();
        toggleForecast();
      }}
    >
      <Temp>{temp}&deg;c</Temp>
      <City>{city}</City>
    </Temperature>
  );
};

TemperatureComponent.propTypes = {
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  toggleForecast: PropTypes.func.isRequired
};

export default TemperatureComponent;
