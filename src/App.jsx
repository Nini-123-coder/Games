import React, { useState } from 'react'
import Word from './Components/Word'
import WordPage from './WordPage'
// import WordGuess from './Components/WordGuess'

const App = () => {
const [Start, setStart] = useState(0)
const [words, setwords] = useState([
    {
        Categories: "Animal",
        items: ["Giraffe", "Leopard", "Lions", "Tiger", "Sealion"]
    },
    {
        Categories: "Name",
        items: ["Anita", "Juilet", "Nnamdi", "Jenny", "Agozie"]
    },
    {
        Categories: "Food",
        items: ["Rice", "Beans", "Yams", "Garri", "Amal"]
    },
    {
        Categories: "Place",
        items: ["Nigeria", "America", "Thialand", "Korea", "Francis"]
    },
])
  return (
   <>
        {
    Start == 1 ? <WordPage words={words} /> 
    : Start == 0 ?<Word setStart={setStart} />
    : null
   }
       

   </>
  )
}

export default App