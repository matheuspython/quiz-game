import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { GlobalStyle } from '../global/styles';
import { api } from '../services/api'

// import { Container } from './styles';

export const Home: React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <ul>
        
      </ul>
    </>
  )
}
