import React from "react";

import HornedBeast from './HornedBeast'
import data from './data.json'

import './Main.css';


class Main extends React.Component {
  render() {
    let beastComponentToRender = [];

    data.forEach((beast, index) => {
      let beastComponent = <HornedBeast
      key={index}
      title={beast.title}
      imageUrl={beast.image_url}
      description={beast.description}
      />
      beastComponentToRender.push(beastComponent)
      
    });

     return (
       <main>
          {beastComponentToRender}
       </main>
    );
  }
};

export default Main;
