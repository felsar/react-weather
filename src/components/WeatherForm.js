import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const WeatherForm = ({ search, setSearch, setQuery }) => {

    //form State
    const [error, setError] = useState(false);

    //Get search  <Destructuring>
    const { city, country } = search;

    //Set State
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    //Form submit
    const hanldeSubmit = e => {
        console.log("On submit");
        e.preventDefault();
        if (city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        
        //Turn on flag for query
        setQuery(true);        
    }

    return ( 
        <form onSubmit={hanldeSubmit}> 
            {error ?
                <Error message="All fields are mandatory" />
                : null
            }
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-Select a Country-</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Search"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}

WeatherForm.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,
}
 
export default WeatherForm;