import styled from 'styled-components'
import settings from '../settings.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  return (
    <QuizBackground backgroundImage={settings.bg}>
      <QuizContainer>
        <QuizLogo />
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
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pmmdesenvolvedor/AluraQuiz" />
    </QuizBackground>
  )
}