import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 10%;
  margin-bottom: 5%;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #170C3A;
  font: Semibold 42px/50px Source Sans Pro;
  text-transform: uppercase;
  margin-bottom: 3%;
`;

export const SubTitle = styled.h3`
  color: #170C3A;
  font: Semibold 30px/36px Source Sans Pro;
  text-transform: capitalize;
`;

export const Search = styled.div`
  width: 100%;
  margin-top: 3%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  input {
    border: 1px solid #EBEAED;
    border-radius: 5px;
    width: 200px;
    height: 35px;
  }

  button {
    background-color: #2F55CC;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;  

    img {
      width: 25%;
      margin-right: 5%;
    }
  }
`;
