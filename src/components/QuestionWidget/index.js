import styled from 'styled-components';
import settings from '../../../db.json';

import Widget from '../Widget';
import Button from '../Form/Button';

const Answer = styled.div`
  display: flex;
  margin-bottom: 4px;
  background-color: #232323;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;

  > input {
    padding: 0;
    margin: 6px;
  }

  > label {
    width: 100%;
    padding: 6px 0;
    cursor: pointer;
  }
`;

const Result = styled.div`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  color: white;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const isCorrectClass = settings.theme.colors.success;
const isWrongClass = settings.theme.colors.wrong;

const QuestionWidget = ({question, questionIndex, totalQuestions, onSubmit, addResult}) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState(undefined);
  const [isAnswered, setIsAnswered] = React.useState(false)
  const hasSelectedAnswer = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === question.answer;
  const isWrong =  selectedAnswer && selectedAnswer !== question.answer;

  const onSubmitHandler = e => {
    e.preventDefault();
    setIsAnswered(true);

    setTimeout(() => {
      addResult(isCorrect);
      onSubmit(e);
      setIsAnswered(false);
      setSelectedAnswer(undefined);
    }, 3 * 1000);
  }

  return (
    <Widget>
      <Widget.Header style={{flexDirection: 'column' }}>
        <h6> {`Pergunta ${questionIndex + 1} de ${totalQuestions}`} </h6>
        <p>{ question.title }</p>
      </Widget.Header>
      <Widget.Content>
        <form onSubmit={onSubmitHandler}>
          { question.description !== null && <p>Dica: { question.description }</p> }
          {
            question.alternatives.map((answer, index) => {
              const answerId = `answer__${index}`;
              return (
                <Answer key={answerId}>
                  <input
                    type="radio"
                    name="answers"
                    id={answerId}
                    checked={(selectedAnswer === index)}
                    onChange={() => setSelectedAnswer(index)}
                    disabled={isAnswered}
                  />
                  <label htmlFor={answerId}>{answer}</label>
                </Answer>
              )
            })
          }
          <br />
          <Result
            style={{
              display: isAnswered ? 'block' : 'none',
              backgroundColor: isCorrect ? isCorrectClass : isWrong ? isWrongClass : null
            }}
          >
            Resposta   
            { isCorrect ? ' correta' : null }
            { isWrong ? ' incorreta' : null }
          </Result>
          <Button type="submit" disabled={!hasSelectedAnswer || isAnswered}>
            { ((questionIndex + 1) === totalQuestions) ? 'Finalizar' : 'Responder' }
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget;