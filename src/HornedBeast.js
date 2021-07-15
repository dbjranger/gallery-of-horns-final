import React from 'react';

import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timesFavorited: 0,
    }
  }

  addOne = () => {
    this.setState({
      timesFavorited: this.state.timesFavorited + 1,
    })
  }

  render() {

    return (
      <div className="hornedBeast">
        <>
          <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl} alt={this.props.description}/>
          <p>{this.props.description}</p> 
          <p>💟{this.state.timesFavorited} times</p>
          <button onClick={this.addOne}>Add Favorite</button>
        </>
      </div>
      
    )
  }
}

export default HornedBeast;