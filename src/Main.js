import React from "react";

import HornedBeast from './HornedBeast'
import data from './data.json'

import './Main.css';


class Main extends React.Component {
  render() {
    for (let i = 0; i < 5; i++) {
    
     return (
       <main>
        <HornedBeast
          title={data[i].title}
          imageUrl={data[i].image_url}
          description={data[i].description}
        />
       </main>
    );
    }
  }
}

export default Main;
