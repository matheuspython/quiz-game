import React from 'react';
import { Game } from '../Game';

import { Container } from './styles';

export const Main: React.FC = () => {



  return (
    <Container>
      <div className="container">
          <Game />
      </div>
    </Container>
  )
}
