import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`
export const Question = styled.p`
  text-align: center;
  font-weight: 400;
  margin: 8px;
`
export const List = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  gap: 5px;

  li{
    cursor: pointer;
    width: 100%;
    background-color: #10b1bd;
    padding: 5px;
    border-radius: 5px;
    transition: .2s;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      font-size: 18px;
    }
  }
`
