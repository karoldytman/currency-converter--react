import styled from "styled-components";

export const ClockStyled = styled.div`
  text-align: right;
  font-family: "Inconsolata", monospace;
  border: 2px solid ${({theme}) => theme.color.green};
  border-radius: 50px;
  background-color: ${({theme}) => theme.color.title};
  margin-left: 160px;
  padding: 3px;
`;
