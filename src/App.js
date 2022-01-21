import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    base_url: "http://jservice.io/api/random",
    question: " ",
    score: 0,
    category: "",
    value: 0,
    hide: false,
    answer: "",
  };
  handleGetQuestion = (event) => {
    fetch(this.state.base_url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          question: data[0].question,
          value: data[0].value,
          category: data[0].category.title,
          answer: data[0].answer,
        });
      });
  };

  handleDecrease = (event) => {
    this.setState({ score: this.state.score - this.state.value });
  };

  handleIncrease = (event) => {
    this.setState({ score: this.state.score + this.state.value });
  };

  handleReset = (event) => {
    this.setState({
      question: " ",
      score: 0,
      category: "",
      value: 0,
      hide: false,
      answer: "",
    });
  };

  handleReveal = (event) => {
    this.setState({ hide: !this.state.hide });
  };

  render() {
    return (
      <div className="container">
        <h1>welcome to Jeopardy</h1>
        <h2>
          Score: <span> {this.state.score}</span>
        </h2>
        <div className="center">
          <button onClick={this.handleDecrease} className="btn">
            Decrease
          </button>
          <button onClick={this.handleIncrease} className="btn">
            Increase
          </button>
          <button onClick={this.handleReset} className="btn">
            Reset
          </button>
        </div>

        <h2>Let's play</h2>

        <button className="btn" onClick={this.handleGetQuestion}>
          Get Question
        </button>
        <h2>
          Category: <span> {this.state.category}</span>
        </h2>
        <h2>
          Points: <span> {this.state.value}</span>
        </h2>
        <h2>
          Answer: <span>{this.state.question}</span>
        </h2>
        <button className="btn" onClick={this.handleReveal}>
          Click To Reveal Question
        </button>
        <h2 className={this.state.hide ? "display" : "hide"}>
          What is : <span>{this.state.answer} </span>
        </h2>
      </div>
    );
  }
}

export default App;
