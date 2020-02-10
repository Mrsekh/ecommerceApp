import React from 'react';
import HomePage from './pages/homepage/homepage.component'; 
import {Route} from 'react-router-dom';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>

)


function App() {
  return (
    <div>
      <Route exact  path='/' component={HomePage}/>
      <Route exact path='/shop/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
