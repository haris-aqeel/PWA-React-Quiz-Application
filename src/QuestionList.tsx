import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import { locationType,QuestionType, AllQuestion } from './Types/types'
import service from './Services/service'
import QuestionDisplay from './Question';

const QuestionList = () => {
    const [QuestionList, setQuestionList] = useState([])
    const [Question, setQuestion] = useState<string>("");
    const [CorrectAnswer, setCorrectAnswer] = useState<string>("");
    const [Options, setOptions] = useState<string[]>([])
    const [currentStep, setCurrentStep] = useState<number>(0)
    const location: locationType = useLocation();
    const {state} = location;
    const {Difficulty, NumberOfQuestions, Topic} = state;



    
    useEffect(() => {
        
        const fetchData = async() => {
            const data: AllQuestion = await service(Difficulty, NumberOfQuestions, Topic);
            let {incorrect_answers, question, correct_answer}: QuestionType = data[currentStep]
            setQuestion(question)
            setCorrectAnswer(correct_answer)
            setOptions([...incorrect_answers, correct_answer])
        }

        fetchData();
        
    }, [Difficulty, NumberOfQuestions, Topic, currentStep])


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCurrentStep(currentStep+1)
    }
    
    
    return (
        <div>
            <QuestionDisplay 
                callback= {handleSubmit}
                questions = {Question}
                options = {Options.map((a) => ({sort: Math.random(), value: a}))
                            .sort((a, b) => a.sort - b.sort)
                            .map((a) => a.value)}
                answer = {CorrectAnswer}
            />
        </div>
    )
}

export default QuestionList
