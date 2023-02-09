import { useState, useEffect} from 'react'
import Select from 'react-select'
import Fact from "./Fact";
import SuccessAlert from './Success';

import FailAlert from './Fail';
import WinStreakDisplay from './WinStreakDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Alert } from 'react-bootstrap';

const Game = () => {
  
  const [country, setCountry] = useState([])
  const [suggestionCountry, setSuggestionCountry] = useState([])
  const [randCountry, setRandCountry] = useState([])
  const [userInput, setUserInput] = useState("")
  let [winstreakCounter, setWinStreakCounter] = useState(0)
  let [factCounter, setFactCounter] = useState(0)
  
  
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
        countryArray.push({value: countryList[i].name.common,
        label: countryList[i].name.common
        })
    }
    countryArray.sort((a, b) => a.value.localeCompare(b.value)) // sort array alphabetically by value
    setSuggestionCountry(countryArray)
    
    
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
    console.log(rndCountry)
    const factsArray = [                                // array of facts in order 
      `The capital of this country is ${rndCountry.capital}.`,
      `The population of this country is roughly ${formattedPopulation}.`,
      `This country is located in ${rndCountry.region}.`,
      //`The currency code of this country is ${firstKey}.`
    ]
    let quizArray = factsArray.join('\r\n')
    
    setData({flag: rndCountry.flags.png,
    text: quizArray})

  }
  const handleUserInput = (event) => { 
    setUserInput(event.value)       // taking the users input and setting the state
  }

  const checkCorrect = () => {            // check for correct country
    if(userInput === ""){                 // empty submit not allowed
      alert("Please enter country name")
      
    }
    else if(randCountry.name.common  === userInput) {    // userinput is correct 
      
      incByOne()
      generateRandom()
      
      
    } else {alert("Incorrect, try again")                 // if wrong country, keep guessing
      if (winstreakCounter > 0) {
        setWinStreakCounter(winstreakCounter = 0)
      }
      return(
        <FailAlert></FailAlert>
      )
  }
    setUserInput("")
    
  }

  const incByOne = () => {
    setWinStreakCounter(winstreakCounter = winstreakCounter+1)
    console.log(winstreakCounter)
  }

  const customStyles = {
    control: base => ({
      ...base,
      height: 35,
      width: 500,
      marginBottom: 10    })
  }
  const buttonStyle = {
    control: base => ({
      ...base,
      height: 35,
      width: 100,
      margin: 5    })
  }

  
  
  

  

  return (
    
    <div>
    <Container>
    <Button style={{marginTop: 5}} onClick={handleClick}>Start</Button>
    <Fact data={data}></Fact>
    <Select styles={customStyles} options={suggestionCountry}  onChange={handleUserInput} placeholder="Enter country"></Select>
    <Button styles={buttonStyle} onClick={checkCorrect}>Submit</Button>
    <SuccessAlert></SuccessAlert>
    <FailAlert></FailAlert>
    <WinStreakDisplay winstreakCounter={winstreakCounter}></WinStreakDisplay>
    </Container>
    </div>
    
    

  )
}


export default Game