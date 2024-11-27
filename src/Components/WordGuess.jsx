import React, { useEffect, useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import SucessPage from './SucessPage';
import FailurePage from './FailurePage';


const WordGuess = ({category, words,}) => {
    const [newWords, setnewWords] = useState([])
    const [words2, setwords2] = useState([])
    const [wordTruth, setWordTruth] = useState([])
    const [LivesArr, setLivesArr] = useState([1, 2, 3, 4, 5]);
    const [memory, setMemory] = useState([]);
    const [next, setNext] = useState(0);
    const [catergoryIndex, setcatergoryIndex] = useState(0)
    // console.log(newWords[catergoryIndex].items.length);

     const addvalue=(e, i)=>{
        if (wordTruth.includes(e)){
            let ind = wordTruth.indexOf(e);
            let inde = wordTruth.lastIndexOf(e);
            console.log(newWords[ind], e)
            if(newWords[ind] === ""){
                let newWord2 = [...newWords]
                newWord2[ind] = e;
                setnewWords(newWord2);
                let newer = [...words2]
                newer[i] = ""
                setwords2(newer)
            }else if(newWords[inde] === ""){
                let newWords1 = [...newWords];
                newWords1[inde] = e;
                setnewWords(newWords1)
                let newer = [...words2]
                newer[i] = ""
                setwords2(newer)
            }
        }else{
            let newLives = [...LivesArr];
            if (newLives.length === 1) {
                setNext(2)
            } else {
                newLives.pop()
                setLivesArr(newLives)
            }
        }
     }
      
     const changeWord=()=>{
        for(let index = 0; index < words.length; index++) {
            if (category == words[index].Categories) {
                setcatergoryIndex(index)
                const newArray = words[index].items[Math.floor(Math.random() * words[index].items.length)].toUpperCase().split("");
                console.log(newArray);
                setWordTruth(newArray)
    
                const setRandom = newArray.map((e, id, arr)=>{
                    if(id !==0 && id  !== (arr.length -1)){
                        return "";
                    }else{
                        return e;
                    }
                })
                setnewWords(setRandom)
                const newv = newArray.filter((e, id, a)=>( id !== 0 && id !== (a.length -1) ) )
                let newArr=Array(3).fill().map(() => {
                    const characters = 'abcdefghijklmnopqrstuvwxyz';
                    return Array(1).fill().map(() => {
                        return characters.toUpperCase().charAt(Math.floor(Math. random() * characters.length))
                    }).join('');
                });
                // console.log(newArr);
                const toAdd=()=>{
                    for (const element of newArr) {
                        const randomIndex = Math.floor(Math.random() * (newv.length));
                        newv.splice(randomIndex, 0, element);
                    }
                }
                toAdd();
                setwords2(newv);
                setMemory((prev)=> [...prev, newArray.join("")])
            }else{
                console.log("NO")
            }
        }
     }
     useEffect(()=>{
        if((memory.length -1) === words[catergoryIndex].items.length){
            setNext(1)
        }else if(words2.filter((e)=> e !== "").length === 3){
            changeWord()
        }
     },[words2])

    useEffect(() => {
        changeWord()
    }, [category])
    // console.log(newWords);
    // console.log(category);
    
  return (
   <>
   {
    next == 0 ?
    <div className='Guesswordbody'>
    <div className="Guessbody2">
      <div>
          <h6>Guess The Word</h6>
      </div>
      <div className='allboxes'>
          <div><h5>{category}</h5></div>
          <div className='boxcontainer'>
            {
              newWords.map((e, id)=> (
              <div className='box8' key={id}>{e}</div>
              ))
            }
          </div>
      </div>
      <div className='Alpahold'>
      <div className='alphabet'>
         {
          words2.map((e,id)=>(
              <div  className='alphabox' onClick={()=>addvalue(e, id) }>{e}</div>
          ))
         }
      </div>
      </div>
      <div className='live'>
          <div className='live1'>
              {
                  LivesArr.map((e, i)=>(
              <div className='live2'>
                  <IoMdHeart className='heart' key={i}/>
              </div>
                  ))
              }
          </div>
      </div>
    </div>
  </div>
  : next === 1 ? <SucessPage/>
  : next === 2 ? <FailurePage/>
    : null
   }
   </>
  )
}

export default WordGuess
