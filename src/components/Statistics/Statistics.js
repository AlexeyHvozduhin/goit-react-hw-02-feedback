import { StatHeader, StatLine } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatHeader>Statistics</StatHeader>
      <StatLine>
        Good: <span>{good}</span>
      </StatLine>
      <StatLine>
        Neutral: <span>{neutral}</span>
      </StatLine>
      <StatLine>
        Bad: <span>{bad}</span>
      </StatLine>
      <StatLine>
        Total: <span>{total}</span>
      </StatLine>
      <StatLine>
        Positive feedback: <span>{positivePercentage}</span>
      </StatLine>
    </div>
  );
};
