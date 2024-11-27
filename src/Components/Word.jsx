import React from 'react'
import './Word.css'
// import yellow from '../assets/yellow2.avif'

const Word = ({setStart}) => {
  return (
    <div className='Body'>
        <div className='MainBody'>
            <div className='Main1'>
                <div className='Text'>
                    <div className='Text1'>
                        <h1>GUESS</h1>
                    </div>
                </div>
                <div className='Test'>
                    <div className='Test1'>
                        <h2>ASSOICATION</h2>
                    </div>
                </div>
                <div className='Box'>
                    <div className='Box1'>
                        <div className='box'>W</div>
                        <div className='box1'>O</div>
                        <div className='box2'>R</div>
                        <div className='box3'>D</div>
                    </div>
                </div>
                <div className='Btn'>
            <div className='Btn1'>
                <button onClick={()=> setStart(1)}>PLAY GAME</button>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Word