import axios from "axios";
import { useState, useEffect} from 'react'
import Fact from "./Fact";

const Game = () => {
  
  const [country, setCountry] = useState([])
  const [randCountry, setRandCountry] = useState([])
  const [userInput, setUserInput] = useState("")
  let [winstreakCounter, setWinStreakCounter] = useState(0)
  const [data, setData] = useState({
    flag: null,
    text: null,
  });
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")   //get all countries
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
    const populationInt = Number(rndCountry.population)
    const roundedPop = Math.round(populationInt/1000)*1000
    const formattedPopulation = roundedPop.toLocaleString()
  
    const factsArray = [                                // array of facts in order 
      `The capital of this country is ${rndCountry.capital}.\n`,
      `The population of this country is roughly ${formattedPopulation}.`,
      `This country is located in ${rndCountry.region}.`,
      //`The currency code of this country is ${firstKey}.`
    ]
    const rndFactNbr = Math.floor(Math.random() * 3)
    setData({flag: rndCountry.flags.png,
    text: factsArray[rndFactNbr]})

  }
  const handleUserInput = (event) => { 
    event.preventDefault()
    setUserInput(event.target.value)

  }
  const checkCorrect = () => {            // check for correct country
    if(userInput === ""){                 // empty submit not allowed
      alert("Please enter country name")
    }
    else if(randCountry.name.common  === userInput) {    // userinput is correct 
      alert("Correct! Generating new country...")
      generateRandom()
      
    } else {alert("Incorrect, try again")                 // if wrong country, keep guessing
    }
    setUserInput("")
    
  }
  const incByOne = () => {
    setWinStreakCounter(winstreakCounter++)
    console.log(winstreakCounter)
  }

  

  return (
    <div>
    <button type="button" onClick={handleClick}>Random country</button>
    <Fact data={data}></Fact>
    <p>What is this country?</p>
    <input value={userInput} onChange={handleUserInput} />
    <button onClick={checkCorrect}>Submit</button>
    </div>

  )
}

export default Game