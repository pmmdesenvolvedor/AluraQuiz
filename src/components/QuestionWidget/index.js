import styled from 'styled-components';

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

const QuestionWidget = ({question, questionIndex, totalQuestions, onSubmit}) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const selectAnswer = e => {
    setSelectedAnswer(e.target.value);
  }

  return (
    <Widget>
      <Widget.Header style={{flexDirection: 'column' }}>
        <h6> {`Pergunta ${questionIndex + 1} de ${totalQuestions}`} </h6>
        <p>{ question.title }</p>
      </Widget.Header>
      <Widget.Content>
        <form onSubmit={onSubmit}>
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
                    value={answer}
                    onClick={selectAnswer}
                  />
                  <label htmlFor={answerId}>{answer}</label>
                </Answer>
              )
            })
          }
          <br />
          <Button type="submit" >
            { ((questionIndex + 1) === totalQuestions) ? 'Finalizar' : 'Responder' }
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget;