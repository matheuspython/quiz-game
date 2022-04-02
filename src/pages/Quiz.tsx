import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

import { GlobalStyle } from '../global/styles'

export const Quiz:React.FC = ()=> {

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  )
}

