import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  margin: 8px;
  max-width: 400px;
  background-color: #19799f;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  img{
    width: 100%;
    border-radius: 12px;
    margin-top: 5px;
    transition: .4s;
    cursor: pointer;
    &:hover{
      width: calc(100% + 5px);
    }
  }
  a{
    color: #fff;
    /* text-decoration: none; */
    margin: 15px auto;
    font-size: 25px;
    text-transform: uppercase;
    transition: .4s;
    &:hover{
      font-size: 40px;
    }
  }
`;
