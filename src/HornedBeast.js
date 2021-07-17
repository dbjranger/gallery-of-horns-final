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
              <Card.Img onClick={this.props.handleShowModal} variant="top" 
                src={this.props.imageUrl} 
                alt={this.props.description}
                title={this.props.title}
              />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  <p>{this.props.description}</p> 
                  <p>💟{this.state.timesFavorited} times</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </>
      </div>
      
    )
  }
}

export default HornedBeast;