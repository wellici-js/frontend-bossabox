import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';

export default function Main() {
  return (
    <Container>
      <Header />
      {[1, 2, 3, 4].map((item) => (
        <Card key={item} />
      ))}
    </Container>
  );
}
