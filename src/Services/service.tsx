const service = async(level: string, number: string, category: string) => {
    let data = await fetch(`https://opentdb.com/api.php?amount=${number}&difficulty=${level}&type=${category}`);
    let response = await data.json();
    return response.results;

}


export default service;