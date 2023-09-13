import { ContHeader, ContButton } from './FeedbackOptions.styled';
import { BiAtom } from 'react-icons/bi';

export const FeedbackOptions = ({ onLeaveFeedback, resetStatistic }) => {
  return (
    <div>
      <ContHeader>Please leave feedback</ContHeader>
      <ContButton onClick={onLeaveFeedback} value={'good'}>
        G
      </ContButton>
      <ContButton onClick={onLeaveFeedback} value={'neutral'}>
        N
      </ContButton>
      <ContButton onClick={onLeaveFeedback} value={'bad'}>
        B
      </ContButton>
      <ContButton onClick={resetStatistic}>R</ContButton>
    </div>
  );
};
