import React from 'react'

function Result({secretNumber,number}){ 
    let result;
if(number){
    if(secretNumber>number){
        result="Lower"
    }else if(secretNumber<number){
        result="Higher"
    }else{
        result="Hurray! Correct..."
    }
}

  return (
    <div>
        <h3>You Guessed : {result}</h3>
    </div>
  )
  }

export default Result