import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import swDev from './swDev'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import QuestionList from './QuestionList'
import Result from './Result';

ReactDOM.render(

  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/QuestionList'>
          <QuestionList />
        </Route>
        <Route path='/result'>
          <Result />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
registerServiceWorker()