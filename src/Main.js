import React from "react";

import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';

import './Main.css';


class Main extends React.Component {

  render() {
      let beastComponent = this.props.data.map((beast, index) => (
        <HornedBeast
          key={index}
          beast={beast}
          // title={beast.title}
          // imageUrl={beast.image_url}
          // description={beast.description}
          handleShowModalFromMain={this.props.handleShowModalFromApp}
        />)  
      );

     return (
       <main>
          {beastComponent}
       </main>
    );
  }
};

export default Main;
