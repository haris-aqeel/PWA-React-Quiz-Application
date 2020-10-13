export interface stateType{
    Difficulty: string;
    NumberOfQuestions: string;
    Topic: string;
} 

export interface locationType{
    state: stateType;
}

export interface QuestionType {
    category?: string;
    correct_answer: string;
    difficulty?: string;
    incorrect_answers: string[];
    question: string;
    type?: string;
}


export type AllQuestion =  QuestionType[];


export type Response = {
    results: AllQuestion
}

export type displayQuestionType = {
    questions: string;
    options: string[];
    callback: (event: React.FormEvent<HTMLFormElement>) => void;
    answer: string
}