import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header 
          title="Horned Beasts"
        />
        <Main />
        <Footer 
          author="Don Bandy Jr."
        />
      </>
    )
  }
};

export default App;
