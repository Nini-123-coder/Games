import React,  { useState }  from 'react'
import WordGuess from './Components/WordGuess'

const WordPage = ({words}) => {
    const [answers, setanswers] = useState(0)
    const [category, setcategory] = useState('')
  return (
   <>
    { 
        answers  === 0 ?
         <div className='main'>
        <div className='page'>
          <div className='page1'>
            <div className='page2'>
             <h3>Welcome Gamer!</h3>
       </div>
       </div>
       <div className='select'>
        <div className='select1'>
            <div className='select2'>
                <h4>Select Categories</h4>
            </div>
        </div>
       </div>
       <div className='foot'>
        <div className='footer'>
            <div className='section1'>
              {
                words.map((e, id)=>(
                    <button key={id} onClick={()=> {setanswers(1); setcategory(e.Categories)}} >{e.Categories}</button>
                ))
              }

        </div>
       </div>
       </div>
    </div>
    </div>
    : answers  === 1 ? <WordGuess category={category} words={words} />
    : null
    }
   </>
  )
}

export default WordPage