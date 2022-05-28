import React, { useState } from 'react';

import logo from '../../assets/logo.svg'
// styles
import { Container, Content } from './styles';

type HeaderProps = {
    onOpenNewTransactionModal: () => void
}
export const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
   

  return (
      <Container>
          <Content>

          <img src={logo} alt="dt money" />
          <button 
          onClick={onOpenNewTransactionModal}
          >
              Nova transação
          </button>
          </Content>
          
      </Container>
  )
}