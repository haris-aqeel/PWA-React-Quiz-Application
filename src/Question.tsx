import React, {useState} from 'react'
import {displayQuestionType} from './Types/types'


const Question = ({questions, options, callback, answer}: displayQuestionType) => {

    const [UserAnswer, setUserAnswer] = useState<string>("");

    const checkAnswer = (e: any) => {
        setUserAnswer(e.target.value)
    }

    

    return (
        <div>
           <form onSubmit={callback}>
                <h2>{questions}</h2>
                {options.map((curr: string, index:number)=> {
                    return (<li><input type="radio" name='question' onClick= {checkAnswer} value={curr} /><label>{curr}</label></li>) 
                })}
                <input type='submit' value='Submit'/>
           </form>
        </div>
    )
}

export default Question
