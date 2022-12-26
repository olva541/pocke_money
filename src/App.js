import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
// import Home from "./components/home/Home"


function App() {
  return (
    <Router className="App">
        <Navbar/>
        
        <Switch>
          <Route patch="/" component={Home} exact>
            
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
