import React from 'react';
import LandingPage from './components/Screens/LandingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from './components/Screens/ProductPage';


const App = () => (
    <div>
      <Router>
      <Switch>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
        </Switch>
        </Router>
    </div>
)
export default App;