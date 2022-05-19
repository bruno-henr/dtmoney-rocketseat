import React from 'react';
import logo from '../../assets/logo.svg'
// styles
import { Container, Content } from './styles';

export const Header: React.FC = () => {
  return (
      <Container>
          <Content>

          <img src={logo} alt="dt money" />
          <button>
              Nova transação
          </button>
          </Content>
      </Container>
  )
}