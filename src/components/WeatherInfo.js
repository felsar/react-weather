import React from 'react';
import PropTypes from 'prop-types';

const WeatherInfo = ({ result }) => {
    
    const { name, main } = result;
    if (!name) return null;

    const tempCelsius = main.temp - 273;
    const tempCElMax = main.temp_max - 273;
    const tempCElMin = main.temp_min - 273;

    return (<div className="card-panel white col s12">
        <div className="black-text">
            <h2> {name} </h2>
            <p className="temperature">
                {parseFloat(tempCelsius, 10).toFixed(0)} <span>&#x2103;</span>
            </p>
            <p>
                {parseInt(tempCElMax, 10)} <span>&#x2103;</span>
            </p>
            <p>
                {parseInt(tempCElMin, 10)} <span>&#x2103;</span>
            </p>
        </div>
        
    </div>);
}

WeatherInfo.propTypes = {
    result: PropTypes.object.isRequired,
}

export default WeatherInfo;