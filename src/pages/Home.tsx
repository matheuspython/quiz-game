import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { GlobalStyle } from '../global/styles';
import { api } from '../services/api'
import { io } from 'socket.io-client';
import { Container } from '../global/HomeStyle';
import { QuizList } from '../components/QuizList';


type Post = {
  img: string,
  question: string,
  response1: string,
  response2: string,
  response3: string,
  correct: number
}


const postQueue: Post[] = []
const socket = io('http://localhost:4000/')
socket.on('new_post', (newPost: Post) =>{
  postQueue.push(newPost)
})

export const Home: React.FC = () => {
  const [post, setPost] = useState<Post[]>([])
  useEffect(()=>{
    api.get<Post[]>('/recebePost').then(response =>{
      console.log(response.data)
      setPost(response.data)
    })
  },[])
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <main>
        <ul>
          {post.map(poste => (
            <QuizList img={poste.img} question={poste.question} key={poste.question} />
          ))}
        </ul>
      </main>
    </Container>
  )
}
