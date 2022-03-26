import React from 'react';

import { Container } from './styles';
import { questions } from '../../Utils/questions';


export const Game: React.FC = () => {
  return (
    <Container>
      <div className="imgs">
        <img src="http://github.com/naruto.png" alt="imagem com foto da questão" />
      </div>
      <h1>pergunta</h1>
      <ul>
        <li>resporta 1</li>
        <li>resposta 2</li>
        <li>resposta 3</li>
      </ul>
    </Container>
  )
}
