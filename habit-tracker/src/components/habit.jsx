import React, { Component } from "react";

class Habit extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit />
        ))}
      </ul>
    );
  }
}

export default Habit;
