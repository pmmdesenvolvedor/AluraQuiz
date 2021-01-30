import React from 'react';
import Head from'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import settings from '../settings.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Form/Input';
import Button from '../src/components/Form/Button';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();
  const onSubmitHandler = (e) => { 
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }
  const isDisabled = () => name.length === 0;
  return (
    <QuizBackground backgroundImage={settings.bg}>
      <Head>
        <title>Chess Quiz Alura - Home</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1 style={{textAlign: 'center'}}>{settings.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{settings.description}</p>
            <form onSubmit={onSubmitHandler}>
              <Input
                name="username"
                onChange = {(e) => setName(e.target.value)}
                placeholder="Diz aí seu nome jogador"
                value={name}
              />
              <Button
                type="submit"
                disabled={isDisabled()}>                  
                    {isDisabled() ? `Quer jogar?` : `Vamos jogar ${name}`}
                </Button>
            </form>
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
  );
}
