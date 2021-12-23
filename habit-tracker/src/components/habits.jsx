import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

import Button from "react-bootstrap/Button";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul className="row py-3">
          {this.props.habits.map((habit) => (
            <Habit
              className="col-6 col-md-5"
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <Button
          variant="primary"
          className="m-auto d-block"
          onClick={this.props.onReset}
        >
          Reset All
        </Button>
      </>
    );
  }
}

export default Habits;
