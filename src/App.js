import React, { Fragment, useState, useEffect } from "react";
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import Error from './components/Error';

import { WEATHER_URL, API_KEY } from './constants/weatherAPI';


function App() {
  //Principal state and send it to form
  const [searchParams, setSearchParams] = useState({
    city: '',
    country: ''
  });

  const { city, country } = searchParams;

  const [query, setQuery] = useState(false);

  const [result, setResult] = useState({});

  const [error, setError] = useState(false);
  //UseEffect will be executed everytime tha dependencies change
  //In this case Query flag which is ON when submit form
  useEffect(() => {
    if(query) //call API only on submit
      getAPI();
    //eslint-disable-next-line
  }, [query]);

  const getAPI = async () => {
    const URL = `${WEATHER_URL}?q=${city},${country}&appid=${API_KEY}`
    

    const apiResponse = await fetch(URL);
    
    const apiResult = await apiResponse.json();
    console.log(apiResult)

    setResult(apiResult);
    setQuery(false);

    if (result.cod === "404")
      setError(true);
    else
      setError(false);
  }

  let weatherInfoCmponeent = error ?
    <Error message="City not found" />
    :
    <WeatherInfo result={result} />


  return (
    <Fragment>
      <Header
        title="Weather" />
      
      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <WeatherForm
                search={searchParams}
                setSearch={setSearchParams}
                setQuery={setQuery}
              />
            </div>
            <div className="col m6 s12">
              {weatherInfoCmponeent}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
