import React, { Component } from 'react';
import { Section, FeedbackOptions, Statistics } from 'components';

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={statsTitles}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            stats={this.state}
            options={statsTitles}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </>
    );
  }
}
