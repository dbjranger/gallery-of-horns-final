import React from "react";

import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';

import './Main.css';


class Main extends React.Component {

  render() {
      let beastComponent = this.props.data.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          handleShowModal={this.props.handleShowModal}
        />)  
      );

     return (
       <main>
          {/* <SelectedBeast><h2 onClick={this.props.SelectedBeast}></h2></SelectedBeast> */}
          {beastComponent}
       </main>
    );
  }
};

export default Main;
