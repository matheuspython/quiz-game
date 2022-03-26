import React from 'react';

import { Container, Image, List, Question } from './styles';
import { questions } from '../../Utils/questions';


export const Game: React.FC = ({ }) => {
  return (
    <Container>
      <div className="imgs">
        <Image src="http://github.com/naruto.png" alt="imagem com foto da questão" />
      </div>
      <Question>pergunta</Question>
      <List>
        <li>resporta 1</li>
        <li>resposta 2</li>
        <li>resposta 3</li>
      </List>
    </Container>
  )
}
