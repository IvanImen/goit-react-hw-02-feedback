import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = statsKey =>
    this.setState(prev => ({
      [statsKey]: prev[statsKey] + 1,
    }));

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 'There is no feedback'
      : Math.ceil((this.state.good / this.countTotalFeedback()) * 100) + '%';
  };

  render() {
    const statsTitles = Object.keys(this.state);

    return (
      <>
        <h1>Please leave feedback</h1>
        {statsTitles.map(statsTitle => (
          <button key={statsTitle} onClick={() => this.handleClick(statsTitle)}>
            {statsTitle}
          </button>
        ))}
        <h2>Statistics</h2>
        <ul>
          {statsTitles.map(statsTitle => (
            <li key={statsTitle}>
              {statsTitle} {this.state[statsTitle]}
            </li>
          ))}
        </ul>
        <ul>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive Feedback: {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </>
    );
  }
}
