import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { ButtonList, StatisticsList } from './Feedback.styled';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = e => {
    this.setState(prevState => {
      return {
        [e.target.innerText]: prevState[e.target.innerText] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => {
      return acc + item;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <ButtonList>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onClickBtn}
            />
          </ButtonList>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <StatisticsList>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
            </StatisticsList>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
