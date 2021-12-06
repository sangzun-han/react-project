import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  render() {
    handleIncrement = (habit) => {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      habits[index].count++;
      this.setState({ habits });
    };

    handleDecrement = (habit) => {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      habits[index].count - 1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({ habits });
    };

    handleDelete = (habit) => {
      const habits = this.state.habits.filter((item) => item.id);
    };

    return <Habits />;
  }
}

export default App;
