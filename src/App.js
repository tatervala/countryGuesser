import axios from "axios";
import { useState, useEffect} from 'react'
import Fact from "./components/Fact";
const App = () => {
  
  const [country, setCountry] = useState([])
  const [randCountry, setRandCountry] = useState([])
  const [userInput, setUserInput] = useState("")
  let winstreakCounter = 0
  const [data, setData] = useState({
    flag: null,
    text: null,
  });
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all") //get all countries
      .then((res) => {
        setCountry(res)
      });
  }, []);

  const handleClick = () => {
    generateRandom()
  }

  const generateRandom = () => {
    const rndNbr = Math.floor(Math.random() * 250) // random number
    const rndCountry = country.data[rndNbr]        // generate random country from all the countries
    setRandCountry(rndCountry)
    console.log(rndCountry.name.common)
    let [firstKey] = Object.keys(rndCountry.currencies) // access first item in currencies object
    const factsArray = [                                // array of facts in order 
      `The capital of this country is ${rndCountry.capital}.\n`,
      `The population of this country is ${rndCountry.population}.`,
      `The currency code of this country is ${firstKey}.`
    ]
    
    setData({flag: rndCountry.flags.png,
    text: factsArray[0]})
  }
  const handleUserInput = (event) => { 
    setUserInput(event.target.value)
  }
  const checkCorrect = () => {            // check for correct country
    if(randCountry.name.common  === userInput) {    // userinput is correct
      console.log("oikein")
      winstreakCounter += 1
      console.log(winstreakCounter)
      generateRandom()
    } else {
      console.log("väärin")                 // if wrong country, keep guessing
    }
    setUserInput("")
  }

  return (
    <div>
    <button onClick={handleClick}>Random country</button>
    <Fact data={data}></Fact>
    <p>What is this country?</p>
    <input value={userInput} onChange={handleUserInput} />
    <button onClick={checkCorrect}>Submit</button>
    </div>

  )
}

export default App