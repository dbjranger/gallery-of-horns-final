import React from "react";

import HornedBeast from "./HornedBeast";
import Form from "react-bootstrap/Form";

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastsToRender: this.props.data,
    };
  }
  handleChange = (event) => {
    let beastsToRender = this.props.data;
    let hornNumber = parseInt(event.target.value);
    console.log(hornNumber);
    // Use filter method to compare horn selection to horn data.
    if (hornNumber) {
      beastsToRender = this.props.data.filter(
        (beast) => beast.horns === hornNumber
      );
    }
    // set created array to beastsToRender inside state

    this.setState({
      beastsToRender: beastsToRender,
    });
  };

  render() {
    let beastComponent = this.state.beastsToRender.map((beast, index) => (
      <HornedBeast
        key={index}
        beast={beast}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        horns={beast.horns}
        handleShowModalFromMain={this.props.handleShowModalFromApp}
      />
    ));

    return (
      <main>
        <Form id="chooseNumberOfHorns">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select The Amount of Horns to View</Form.Label>
            <br />
            <Form.Control onChange={this.handleChange} as="select" custom>
              {/* Need to get the datasource for horns here. */}
              <option value="">All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
        {beastComponent}
      </main>
    );
  }
}

export default Main;
