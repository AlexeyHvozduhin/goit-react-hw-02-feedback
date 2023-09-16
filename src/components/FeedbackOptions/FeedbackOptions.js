import { ContHeader, ContButton } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({
  onLeaveFeedback,
  resetStatistic,
  options,
}) => {
  return (
    <div>
      <ContHeader>Please leave feedback</ContHeader>

      {options.map(option => {
        return (
          <ContButton
            onClick={() => {
              onLeaveFeedback(option);
            }}
            key={nanoid()}
          >
            {option[0].toUpperCase()}
          </ContButton>
        );
      })}
      <ContButton onClick={resetStatistic}>R</ContButton>
    </div>
  );
};
