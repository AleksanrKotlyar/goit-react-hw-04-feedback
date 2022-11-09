import { StatisticsItem, StatisticValue } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <StatisticsItem>
        Good: <StatisticValue>{good}</StatisticValue>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <StatisticValue>{neutral}</StatisticValue>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <StatisticValue>{bad}</StatisticValue>
      </StatisticsItem>
      <StatisticsItem>
        Total: <StatisticValue>{total}</StatisticValue>
      </StatisticsItem>
      <StatisticsItem>
        Positive Feedback: <StatisticValue>{positiveFeedback}%</StatisticValue>
      </StatisticsItem>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
