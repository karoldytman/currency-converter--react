import styled from "styled-components";

export const ResultStyled = styled.div`
  color: ${({theme}) => theme.color.green};
  margin: 20px 2px 40px;
  border: 2px solid ${({theme}) => theme.color.green};
  background-color: ${({theme}) => theme.color.white};
  padding: 10px;
  max-width: max-content;
  border-radius: 50px;
  max-width: 600px;
  margin-top: 6%;
  font-size: 22px;
`;
