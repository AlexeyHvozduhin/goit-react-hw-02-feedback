import { Component } from 'react';
import { Section, Notification } from './Section/Section.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  chengeStatistic = newLevel => {
    console.log(newLevel);
    this.setState(prevState => ({ [newLevel]: prevState[newLevel] + 1 }));
  };

  resetStatistic = () => {
    this.setState({ good: 0, neutral: 0, bad: 0 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedback = (100 / (good + neutral + bad)) * good;
    if (isNaN(positiveFeedback)) return '?';
    else return `${Math.round(positiveFeedback)}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div style={{ textAlign: 'center' }}>
        <Section title="Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.chengeStatistic}
            resetStatistic={this.resetStatistic}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback">
              There is no feedback
            </Notification>
          )}
        </Section>
      </div>
    );
  }
}
