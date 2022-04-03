import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface PostProps{
  img: string,
  question: string,
}

export const QuizList: React.FC<PostProps> = ({ img, question }) => {

  return (
    <Container>
      <h1>{question}</h1>
      <img src={img} alt={question} />
      <Link to="quiz" >oie</Link>
    </Container>
  )
}
