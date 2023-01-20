import axios from "axios";
import { useState, useEffect } from 'react'
import Fact from "./components/Fact";
const App = () => {
  const [country, setCountry] = useState([])
  const [data, setData] = useState({
    flag: null,
    text: null,
  });
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountry(res)
      });
  }, []);

  const handleClick = () => {
    generateRandom()
  }

  const generateRandom = () => {
    const rndNbr = Math.floor(Math.random() * 250)
    const rndCountry = country.data[rndNbr]
    console.log(rndCountry)
    
    const factsArray = [
      `The capital of this country is ${rndCountry.capital}.\n`,
      `The population of this country is ${rndCountry.population}.`
    ]
    const rndDataNbr = Math.floor(Math.random() * 2)
    setData({flag: rndCountry.flags.png,
    text: factsArray[rndDataNbr]})
    
  }

  return (
    <div>
    <button onClick={handleClick}>Random country</button>
    <Fact data={data}></Fact>
    </div>

  )
}

export default App