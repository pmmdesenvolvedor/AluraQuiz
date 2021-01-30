import React, { useState } from 'react';
import styled from 'styled-components';
import Head from'next/head';
import { useRouter } from 'next/router';
import settings from '../settings.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget from '../src/components/QuestionWidget';
import LoadingWidget from '../src/components/LoadingWidget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const QuizPage = props => {
  const router = useRouter();

  const totalQuestions = settings.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = settings.questions[questionIndex];

  const screenStates = {
    LOADING: 'LOADING',
    QUIZ: 'QUIZ',
    RESULT: 'RESULT',
    ERROR: 'ERROR'
  };
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  const onSubmitHandler = e => {
    e.preventDefault();
    if ((currentQuestion + 1) < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  const exitQuizHandler = e => {
    e.preventDefault();
    if (confirm('Tem certeza de que deseja abandonar o Quiz?')) {
      router.push('/');
    }
  };

  const ExitQuiz = styled.a`
    display: flex;
    margin-bottom: 10px;
    padding: 5px;
    background-color: #ffffff50;
    color: ${({ theme }) => theme.colors.mainBg};
    text-align: right;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
  `;

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);    
  }, []);

  return (
    <QuizBackground backgroundImage={settings.bg}>
      <Head>
        <title>Alura Quiz - Vamos Jogar</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        
        { screenState === screenStates.QUIZ && (
          <>
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={onSubmitHandler} />
          </>
          )
        }

        { screenState === screenStates.LOADING && <LoadingWidget /> }

        { screenState === screenStates.RESULT && <p>você acertou X questões.</p> }

        { (screenState === screenStates.QUIZ || screenState === screenStates.RESULT) && (
          <ExitQuiz onClick={exitQuizHandler}>
          Sair do Quiz &nbsp;
          <svg
            height="16"
            viewBox="0 0 512 512"
            width="16"
            xmlns="http://www.w3.org/2000/svg">
              <g id="Solid">
                <path d="m480.971 239.029-90.51-90.509a24 24 0 0 0 -33.942 0 24 24 0 0 0 0 33.941l49.54 49.539h-262.059a24 24 0 0 0 -24 24 24 24 0 0 0 24 24h262.059l-49.54 49.539a24 24 0 0 0 33.942 33.941l90.51-90.51a24 24 0 0 0 0-33.941z"/>
                <path d="m304 392a24 24 0 0 0 -24 24v24h-208v-368h208v24a24 24 0 0 0 48 0v-32a40 40 0 0 0 -40-40h-224a40 40 0 0 0 -40 40v384a40 40 0 0 0 40 40h224a40 40 0 0 0 40-40v-32a24 24 0 0 0 -24-24z"/>
              </g>
          </svg>
          </ExitQuiz>
        )}

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pmmdesenvolvedor/AluraQuiz" />
    </QuizBackground>
  );
};

export default QuizPage;