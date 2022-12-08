
import {useEffect, useState} from "react";
import axios from "axios";
import Graph from "./Graph";

const Dashboard = () => {
  const url = 'https://charts.mongodb.com/charts-project-0-onjhg';
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState({});

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    axios.get(url).then(res => {
      setCountries(res.data.countries);
      const randomCountryNumber = getRandomInt(res.data.countries.length);
      let randomCountry = res.data.countries[randomCountryNumber];
      setSelectedCountry(randomCountry);
      setFilterCountry({"country": randomCountry});
    })
  }, [])

  useEffect(() => {
    if (selectedCountry !== "") {
      setFilterCountry({"country": selectedCountry});
    }
  }, [selectedCountry])

  return <div className="App">
    <div className="form">
      {countries.map(c => <div className="elem" key={c}>
        <input type="radio" name="country" value={c} onChange={() => setSelectedCountry(c)} checked={c === selectedCountry}/>
        <label htmlFor={c} title={c}>{c}</label>
      </div>)}
    </div>
    <div className="charts">
      <Graph baseUrl={url} height={'600px'} width={'800px'} filter={filterCountry} chartId={'638d03a3-95d7-407b-8ebd-03128e1f5bf1'}/>
      <Graph baseUrl={url} height={'600px'} width={'800px'} filter={filterCountry} chartId={'638d0790-fcca-49af-8298-5e2fcbdab5f7'}/>
    </div>
  </div>
};

export default Dashboard;