
import Widget from '../Widget';
import ChessSpinner from '../ChessSpinnner';

const LoadingWidget = ({ title }) => {
  return (
    <Widget>
      <Widget.Header style={{flexDirection: 'column' }}>
        <p>{title}</p>
      </Widget.Header>
      <Widget.Content>
        <ChessSpinner />
      </Widget.Content>
    </Widget>
  )
}

export default LoadingWidget;