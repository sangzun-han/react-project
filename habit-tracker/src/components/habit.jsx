import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Habit extends Component {
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mountend`);
  }

  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} unmountend`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;

    return (
      <Card className="me-5 mb-5 flex-wrap" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{count}</Card.Text>
          <Button
            variant="primary"
            className="me-2"
            onClick={this.handleIncrement}
          >
            <i className="fas fa-plus"></i>
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={this.handleDecrement}
          >
            <i className="fas fa-minus"></i>
          </Button>
          <Button variant="primary" onClick={this.handleDelete}>
            <i className="fas fa-trash"></i>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Habit;
