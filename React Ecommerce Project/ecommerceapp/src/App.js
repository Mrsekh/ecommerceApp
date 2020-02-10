import React from 'react';
import HomePage from './pages/homepage/homepage.component'; 
import {Route} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shoppage/shop-component';



function App() {
  return (
    <div>
      <Route exact  path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
