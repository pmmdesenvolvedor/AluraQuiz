
import Widget from '../Widget';

const ResultsWidget = ({ results }) => {
  console.log('Results: ', results);
  const finalResult = results.filter(resultado => resultado).length;
  return (
    <Widget>
      <Widget.Header style={{flexDirection: 'column' }}>
        <h4>{`Você acertou ${finalResult} questões ( ${Math.trunc(finalResult * 100 / results.length)}% )`}</h4>
      </Widget.Header>
      <Widget.Content>
        <ul>
          {
            results.map((result, index) => (
              <li key={`result_${index}`}>
                {`#${index <= 10 ? '0' + (index + 1) : (index + 1)} : ${result === true ? 'Acertou' : 'Errou'}`}
              </li>
            ))
          }
        </ul>
      </Widget.Content>
    </Widget>
  )
}

export default ResultsWidget;