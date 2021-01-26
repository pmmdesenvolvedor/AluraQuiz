import styled from 'styled-components'
import settings from '../settings.json';
import Widget from '../src/components/Widget';

const BackgroundImage = styled.div`
  flex: 1;
  background-image: url(${settings.bg});
  background-size: cover;
  background-position: center;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum ...</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>The quizes of galera</h1>
            <p>lorem ipsum dolor sit amet..</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  )
}
