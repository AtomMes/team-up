import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions } from '../redux/questionsSlice.ts';
// import styles from './Game.module.scss';

const Game = () => {
  const dispatch = useDispatch();
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [event, setEvent] = React.useState(null);
  const [count, setCount] = React.useState(0);

  const questions = useSelector((state) => state.levelOne.questions[questionIndex]);

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    event.target.style.color = 'black';
    setCount(0);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`https://6399b11a16b0fdad7745ad11.mockapi.io/level1`);
      dispatch(setQuestions(data));
    };
    fetchData();
  }, []);

  if (!questions) return <>Loading...</>;

  return (
    <div>
      {questions.map((question, i) => (
        <div
          key={i}
          onClick={(e) => {
            setCount(1);
            if (count === 0) {
              e.target.style.color = question.isRight === 'true' ? 'blue' : 'red';
              setEvent(e);
            }
          }}>
          {question.title}
        </div>
      ))}
      <button onClick={() => nextQuestion()}>Next question</button>
    </div>
  );
};

export default Game;
