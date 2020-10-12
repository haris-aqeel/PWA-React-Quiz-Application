import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ForwardIcon from "@material-ui/icons/Forward";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom'

import service from './Services/service'

const useStyles = makeStyles((theme) => ({
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
    padding: "20px 10px 50px 10px",
    margin: "auto",
  },
  button: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  controlFormSingle: {
    margin: "0 auto",
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    paddingBottom: "30px",
  },
  SubHeader: {
    fontSize: "18px",
    padding: '6px'
  },
  form: {
      textAlign: 'center'
  }
}));

const TakeData: React.FC = () => {
  const classes = useStyles();

 const history = useHistory();

  const [Difficulty, setDifficulty] = useState<string>("");
  const [NumberOfQuestions, setNumberOfQuestions] = useState<string>("");
  const [Topic, setTopic] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        history.push(
            {path: '/Questions',
            state: {
                Difficulty,
                NumberOfQuestions,
                Topic
            }}
            )  
    //service(Difficulty, NumberOfQuestions,Topic);
    
  }


  return (
    <div className={classes.TakeDataFromUser}>
      <Paper elevation={3} className={classes.root}>
        <h1 className={classes.header}>Quiz Application</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.controlFormSingle}>
            <h2 className={classes.SubHeader}>Select Level Of Difficulty</h2>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Difficult
              </InputLabel>
              <Select
                native
                value={Difficulty}
                onChange={(event) => setDifficulty(`${event.target.value}`)}
                label="Difficult"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Select>
            </FormControl>
          </div>
          <div className={classes.controlFormSingle}>
            <h2 className={classes.SubHeader}>Select Number Of Questions</h2>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Questions
              </InputLabel>
              <Select
                native
                value={NumberOfQuestions}
                onChange={(event) =>
                  setNumberOfQuestions(`${event.target.value}`)
                }
                label="Questions"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </Select>
            </FormControl>
          </div>
          <div className={classes.controlFormSingle}>
            <h2 className={classes.SubHeader}>Select Topic Name</h2>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Topic
              </InputLabel>
              <Select
                native
                value={Topic}
                onChange={(event) => setTopic(`${event.target.value}`)}
                label="Topic"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value="multiple">Multiple</option>
                
              </Select>
            </FormControl>
          </div>
          <Button
            type='submit'
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<ForwardIcon />}
          >
            Start Quiz
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default TakeData;
