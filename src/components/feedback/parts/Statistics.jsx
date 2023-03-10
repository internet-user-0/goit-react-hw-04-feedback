import css from './Statistics.module.css';

// options
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
   <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive feedback: {positivePercentage}%</li>
   </ul>
);

export default Statistics;
