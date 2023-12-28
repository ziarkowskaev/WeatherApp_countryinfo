import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './components/Weather';
const App = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // skip if currency is not defined
    
    if (value != '') {
      console.log('fetching countries...')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setCountries(response.data.filter(x => x.name.common.toLowerCase().includes(value)))
        })
    }
  }, [value])

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
    setSelectedCountry(null);
  }

  const handleSetCountry = (country) => {
    setSelectedCountry(country);
  }


  return (
    <div>
      <form>
        find countries: <input value={value} onChange={handleChange} />
      </form>

{/* less than 10 countries display list of countries with button search */}
      {(countries.length <= 10 && countries.length > 1) && (
      <ul>
          {countries.map((country) => 
            <li key={country.name.common}>{country.name.common}<button onClick={() => handleSetCountry(country)}>show</button></li>
            )}
       </ul>
      )}

{/* more than 10 */}
      {countries.length > 10 && (
        <p>Too many countries to display. Narrow your search.</p>
      )}

{/* country was selected with show button */}
  {selectedCountry && (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Area: {selectedCountry.area}</p>

          <h3>Languages:</h3>
          <ul>
            {Object.values(selectedCountry.languages).map(language => (
              <li key={language}>{language}</li>
            ))}
          </ul>

          <img src={selectedCountry.flags.svg} alt={selectedCountry.flags.alt} />
        </div>
      )}

{/* only one country left show data*/}
      {countries.length == 1 && (
        <div>
            <h2>{countries[0].name.common}</h2>
            <p>Capital: {countries[0].capital}</p>
            <p>Area: {countries[0].area}</p>

            <h3>Languages:</h3>

            <ul>
                {Object.entries(countries[0].languages).map(([code, language]) => (
                  <li key={code}>
                    {language}
                  </li>
                ))} 
            </ul>
            <Weather country = {countries[0]} />
            <img src = {countries[0].flags.svg} alt= {countries[0].flags.alt}/>
       
     </div>
      )}

{/* no match */}
      {countries.length == 0 && (
        <p>No results your search.</p>
      )}
    </div>
  )
}

export default App;