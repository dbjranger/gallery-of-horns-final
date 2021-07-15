import React from 'react';

import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

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
          <CardColumns className="cardColumns">
            <Card>
              <Card.Img variant="top" 
                src={this.props.imageUrl} 
                alt={this.props.description}   
              />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  <p>{this.props.description}</p> 
                  <p>💟{this.state.timesFavorited} times</p>
                  <button onClick={this.addOne}>Add Favorite</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>


          {/* <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl} alt={this.props.description}/>
          <p>{this.props.description}</p> 
          <p>💟{this.state.timesFavorited} times</p>
          <button onClick={this.addOne}>Add Favorite</button> */}
        </>
      </div>
      
    )
  }
}

export default HornedBeast;