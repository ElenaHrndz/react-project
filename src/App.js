import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Pokemon from './components/Pokemon/Pokemon';
import Tiles from './components/Tiles/Tiles';
import Faq from './components/Faq/Faq';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

          <Route exact={true} path="/" component={Home} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/tiles" component={Tiles} />
          <Route path="/faq" component={Faq} />
        <Footer />
      </div>
    );
  }
}

export default App;
