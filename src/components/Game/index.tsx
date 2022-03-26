import React, { useState, useEffect  } from 'react';

import { Container, Image, List, Question } from './styles';
import { questions } from '../../Utils/questions';


export const Game: React.FC = () => {
  const [image, setImage] = useState('')
  const [question, setQuestion] = useState('')
  const [response1, setResponse1] = useState('')
  const [response2, setResponse2] = useState('')
  const [response3, setResponse3] = useState('')
  const [correct, setCorrect] = useState(0)
  
  const [questionNumber, setQuestionNumber] = useState(0)

  function decidePergunta(questionNumber: number){
    setImage(questions[questionNumber].img)
    setQuestion(questions[questionNumber].question)
    setResponse1(questions[questionNumber].response1)
    setResponse2(questions[questionNumber].response2)
    setResponse3(questions[questionNumber].response3)
    setCorrect(questions[questionNumber].correct)

    setQuestionNumber(questionNumber + 1)
  }


  function pergunta(resposta: number){
    if(resposta == correct){
      decidePergunta(questionNumber)
      return
    }
  }

  useEffect(()=>{
    decidePergunta(questionNumber)
  },[])




  
  return (
    <Container>
      <div className="imgs">
        <Image src={image} alt="imagem com foto da questão" />
      </div>
      <Question>{question}</Question>
      <List>
        {questionNumber == 4 && <h1>parabens</h1>}
        {questionNumber != 4 &&(
          <>
            <li onClick={()=>{pergunta(0)}}>{response1}</li>
            <li onClick={()=>{pergunta(1)}}>{response2}</li>
            <li onClick={()=>{pergunta(2)}}>{response3}</li>
          </>
        ) }
      </List>
    </Container>
  )
}
