import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Search,
} from './styles';

import plus from '../../assets/icons/plus.svg';

export default function Header() {
  return (
    <Container>
      <Title>vuttr</Title>
      <SubTitle>very userful tools to remember</SubTitle>
      <Search>
        <input type="text" placeholder="search" />
        <button type="button">
          <img src={plus} alt="fdsf" />
          Add
        </button>
      </Search>
    </Container>
  );
}
