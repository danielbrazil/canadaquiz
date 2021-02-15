import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
// qualquer funcao iniciada com letra maiuscula definem um componente no REACT
// a assinatura da funcao pode utilizar qualquer nome de variavel, mas por padrao usar props
// function Title(props) {
//     return (
//         <h1 >
//             { props.children }
//         </h1>
//     )
// }

export const QuizContainer = styled.div`
  float: right;
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (mad-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

// sintaxe: javascript
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
  // aqui ja eh react atuando por isso nao tem $, o onSubmit no form eh react
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz sobre o Canadá</h1>
          </Widget.Header>
          <Widget.Content>
            <p align="justify">O Canadá é um país que ocupa grande parte da América do Norte e se estende desde o oceano Atlântico, a leste, até o oceano Pacífico, a oeste. Ao norte o país é limitado pelo oceano Ártico. É o segundo maior país do mundo em área total, superado apenas pela Rússia, e a sua fronteira comum com os Estados Unidos, no sul e no noroeste, é a mais longa fronteira terrestre do mundo. </p>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              // eslint-disable-next-line no-console
              console.log('fazendo uma submissao por meio do react');
            }}
            >
              <input
                onChange={function (event) {
                  // state
                  // name = event.target.value;
                  setName(event.target.value);
                }}
                placeholder="Preencha seu nome..."

              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
