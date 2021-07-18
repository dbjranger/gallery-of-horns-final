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
              <Card.Img onClick={() => this.props.handleShowModalFromMain(this.props.beast)} variant="top"
                src={this.props.beast.image_url} 
                alt={this.props.beast.description}
                title={this.props.beast.title}
                key={this.props.key}
              />
              <Card.Body>
                <Card.Title>{this.props.beast.title}</Card.Title>
                <Card.Text>
                  <p>{this.props.beast.description}</p> 
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