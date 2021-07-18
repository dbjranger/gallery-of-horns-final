import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';

import './App.css';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      data: data,
      selectedBeast: {},
    }
  }

  handleShowModal = (selectedBeast) => {
    this.setState({
      showModal: true,
      selectedBeast: selectedBeast
    });

  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }
  
  render() {
    return (
      <>
        <Header 
          title="Horned Beasts"
        />
        <SelectedBeast beast={this.state.selectedBeast} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
        <Main data={data} handleShowModalFromApp={this.handleShowModal}/>
        <Footer 
          author="Don Bandy Jr."
        />
      </>
    )
  }
};

export default App;
