import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';



const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
//qualquer funcao iniciada com letra maiuscula definem um componente no REACT
//a assinatura da funcao pode utilizar qualquer nome de variavel, mas por padrao usar props
// function Title(props) {
//     return ( 
//         <h1 > 
//             { props.children } 
//         </h1> 
//     )
// }

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (mad-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

//sintaxe: javascript 
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
    return (
      //aqui ja eh react atuando por isso nao tem $
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>test</h1>
            </Widget.Header>
            <Widget.Content>
              <p>descricao do que vai vir</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <p>descricao do que vai vir2</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/omariosouto" />
      </QuizBackground>
    )
}