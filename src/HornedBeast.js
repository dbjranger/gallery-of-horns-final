import React from 'react';

import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timesFavorited: 0,
    }
  }

  render() {

    return (
      <div>
        <>
          <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl} alt={this.props.description}/>
          <p>{this.props.description}</p> 
          <p>Favorited {this.state.timesFavorited} times</p>
        </>
      </div>
      
    )
  }
}

export default HornedBeast;