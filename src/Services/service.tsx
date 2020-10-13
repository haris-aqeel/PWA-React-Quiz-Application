import {Response } from '../Types/types'

const service = async(level: string, number: string, category: string) => {
    let data:  globalThis.Response = await fetch(`https://opentdb.com/api.php?amount=${number}&difficulty=${level}&type=${category}`);
    let response: Response = await data.json();
    return response.results;

}


export default service;