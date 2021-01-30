
import Widget from '../Widget';
import ChessSpinner from '../ChessSpinnner';

const LoadingWidget = props => {
  return (
    <Widget>
      <Widget.Header style={{flexDirection: 'column' }}>
        <p>Estamos carregando as informações do Quiz... Aguarde!</p>
      </Widget.Header>
      <Widget.Content>
        <ChessSpinner />
      </Widget.Content>
    </Widget>
  )
}

export default LoadingWidget;