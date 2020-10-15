import { Response } from "../Types/types";

const service = async (level: string, number: string, category: string) => {
  fetch(`https://opentdb.com/api.php?amount=3&difficulty=easy&type=multiple`),
    fetch(`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`);
  fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`);
  fetch(`https://opentdb.com/api.php?amount=3&difficulty=medium&type=multiple`);
  fetch(`https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple`);
  fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`
  );
  fetch(`https://opentdb.com/api.php?amount=3&difficulty=hard&type=multiple`);
  fetch(`https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple`);
  fetch(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple`);
  let data: globalThis.Response = await fetch(
    `https://opentdb.com/api.php?amount=${number}&difficulty=${level}&type=${category}`
  );
  let response: Response = await data.json();
  return response.results;
};

export default service;
