import {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Navbar from './components/navbar'
import Home from "./components/Home"
import CaneCorso from "./components/CaneCorso"
import GermanShep from "./components/GermanShep"
import GoldenDoodle from "./components/GoldenDoodle"

class App extends Component {
  render(){
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/CaneCorso" component={CaneCorso} />
        <Route path="/GermanShep" component={GermanShep} />
        <Route path="/GoldenDoodle" component={GoldenDoodle} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;