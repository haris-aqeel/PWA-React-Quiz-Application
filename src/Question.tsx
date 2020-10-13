import React, { useState } from "react";
import { displayQuestionType } from "./Types/types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ForwardIcon from "@material-ui/icons/Forward";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  TakeDataFromUser: {
    backgroundColor: "#efefef",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  root: {
    height: "auto",
    width: "90%",
    maxWidth: "500px",
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    padding: "20px 20px 50px 20px",
    margin: "auto",
  },

  header: {
    textAlign: "center",
    paddingBottom: "40px",
  },
  SubHeader: {
    fontSize: "18px",
    padding: "6px",
  },
  button:{
      textAlign: "center",
      marginTop: '30px'
  }
}));

const Question = ({
  questions,
  options,
  callback,
  answer,
  number
}: displayQuestionType) => {

  const classes = useStyles();
  const history = useHistory();
  const [UserAnswer, setUserAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [counter, setCounter] = useState<number>(1);
  const checkAnswer = (e: any) => {
    setUserAnswer(e.target.value);
  };

  const fetchAnswer = () => {
    if(counter < +number){
    UserAnswer === answer ? setScore(score + 1) : setScore(score);}
    else{
        history.push({
            pathname: '/result',
            state: {
                score: score,
                amount: +number
            }
        })
    }
    setCounter(counter+1);
  };

  return (
    <div className={classes.TakeDataFromUser}>
      <Paper elevation={3} className={classes.root}>
         <h2 className={classes.header}>Score: {score} / {number}</h2>
        <form onSubmit={callback}>
          <h2 className={classes.SubHeader}>{questions}</h2>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={UserAnswer}
            onChange={checkAnswer}
          >
            {options.map((curr: string, index: number) => {
              return (
                <FormControlLabel
                  key={index}
                  control={<Radio />}
                  name="question"
                  value={curr}
                  label={curr}
                />
              );
            })}
          </RadioGroup>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={fetchAnswer}
            className={classes.button}
            endIcon={<ForwardIcon />}
          >
            {+number === counter ?" Submit ":" Next Question"}
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Question;
