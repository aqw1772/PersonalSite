import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Qualifications from './Qualifications';
import Home from './Home';
import './App.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Services from './Services';
import SecretPage from './UnderConstruction/SecretPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/Qualifications" component={Qualifications} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/SecretPage" component={SecretPage} />
          </Switch>
      </div>
    </HashRouter>
    
  );
}

export default App;
