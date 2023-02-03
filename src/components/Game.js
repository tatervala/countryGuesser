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
    const fetchData = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all") // get country data from api
      const cntr = await data.json()    // to json format
      setCountry(cntr)
      let countryList = Object.keys(cntr).map((k) => cntr[k])
      let countryArray = [] // empty array to hold all the country names
      for (let i = 0; i < countryList.length; i++) { // loop through the object and push the names to the empty list
        countryArray.push(countryList[i].name.common)
    }
    
    }
    fetchData().catch(console.error)
  }, [])
  
  
  const handleClick = () => {
    generateRandom()
  }

  const generateRandom = () => {
    const rndNbr = Math.floor(Math.random() * 250) // random number
    const rndCountry = country[rndNbr]        // generate random country from all the countries
    
    setRandCountry(rndCountry)
    console.log(rndCountry.name.common)
    let [firstKey] = Object.keys(rndCountry.currencies) // access first item in currencies object
    const populationInt = Number(rndCountry.population) // string to Number
    const roundedPop = Math.round(populationInt/1000)*1000  // round the number
    const formattedPopulation = roundedPop.toLocaleString() // format the population for easier reading
  
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
    <button type="button" onClick={handleClick}>Start</button>
    <Fact data={data}></Fact>
    <input value={userInput} onChange={handleUserInput} placeholder="Enter the name of the country"/>
    
    <button onClick={checkCorrect}>Submit</button>
    </div>

  )
}

export default Game