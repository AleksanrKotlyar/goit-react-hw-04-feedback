import { useEffect, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { ButtonList, StatisticsList } from './Feedback.styled';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const onClickBtn = e => {
    const type = e.target.innerText;

    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('Invalid subscription type');
    }
  };

  useEffect(() => {
    setPositiveFeedback(Math.floor((good / (bad + neutral + good)) * 100));
  }, [bad, good, neutral]);

  return (
    <>
      <Section title="Please leave feedback">
        <ButtonList>
          <FeedbackOptions
            options={Object.keys({ good: good, bad: bad, neutral: neutral })}
            onLeaveFeedback={onClickBtn}
          />
        </ButtonList>
      </Section>
      <Section title="Statistics">
        {bad + neutral + good > 0 ? (
          <StatisticsList>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={bad + neutral + good}
              positiveFeedback={positiveFeedback}
            />
          </StatisticsList>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
