
import './App.css';
import React from "react"
import {Switch, Route, NavLink} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import FirstAnswer from "./components/First"
import SecondAnswer from "./components/Second"
import ThirdAnswer from "./components/Third"
import SuccessPage from './components/success';
// import Sign_up from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/20-homework/src/components/Sign up.jsx"
import SorryPage from "./components/sorry"
import Main from "./components/Main"
import FourthAnswer from './components/Fourth';




function App() {
  return (
    <div className="App">
      <Router>     
<Switch>
<Route exact path="/newHB/HB" component={Main} />
<Route exact path="/newHB/success" component={SuccessPage} />
<Route exact path="/newHB/second" component={SecondAnswer} />
<Route exact path="/newHB/sorry" component={SorryPage} />
  <Route exact path="/newHB/first" component={FirstAnswer} />
  <Route exact path="/newHB/third" component={ThirdAnswer} />
  <Route exact path="/newHB/fourth" component={FourthAnswer} />
</Switch>
</Router>
    </div>
  );
}

export default App;
