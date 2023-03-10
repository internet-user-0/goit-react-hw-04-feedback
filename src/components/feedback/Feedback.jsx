import { useState } from 'react';
import Section from './parts/Section';
import FeedbackOptions from './parts/FeedbackOptions';
import Statistics from './parts/Statistics';
import Notification from './parts/Notification';
import css from './Feedback.module.css';

function Feedback() {
   const [Good, setGood] = useState(0);
   const [Neutral, setNeutral] = useState(0);
   const [Bad, setBad] = useState(0);


   function onLeaveFeedback(label) {
      switch (label) {
         case 'Good':
            setGood(Good => Good + 1);
            break;
         case 'Neutral':
            setNeutral(Neutral => Neutral + 1);
            break;
         case 'Bad':
            setBad(Bad => Bad + 1);
            break;
            default: return;
      }
   }

   function countTotalFeedback() {
      return Good + Neutral + Bad;
   }

   function countPositiveFeedbackPercentage() {
      return (
         countTotalFeedback() && Math.round((Good / countTotalFeedback()) * 100)
      );
   }

   return (
      <div className={css.feedback__all}>
         <Section title="Please leave feedback">
            <FeedbackOptions
               options={['Good', 'Neutral', 'Bad']}
               onLeaveFeedback={onLeaveFeedback}
            />
         </Section>

         {countTotalFeedback() ? (
            <Section title="Statistics">
               <Statistics
                  good={Good}
                  neutral={Neutral}
                  bad={Bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()}
               />
            </Section>
         ) : (
            <Notification message="There is no feedback" />
         )}
      </div>
   );
}

export default Feedback;
