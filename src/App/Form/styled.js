import styled from "styled-components";

export const FormFieldset = styled.fieldset`
  font-size: 18px;
  border: 5px solid rgb(3, 174, 117);
  border-radius: 5px;
  background-color: rgb(241, 249, 255);
`;

export const FormLegend = styled.legend`
  padding: 10px 30px;
  background-color: rgb(3, 174, 117);
  border-radius: 50px 50px 50px 50px;
  font-size: 22px;
  color: white;
  border: 3px solid rgb(84, 125, 220);
`;

export const LabelText = styled.span`
  display: inline-block;
  margin-right: 5px;
  max-width: 200px;
  width: 100%;
  margin-bottom: 3px;
`;

export const FormField = styled.input`
  font-size: 20px;
  padding: 8px;
  border: 2px solid rgb(3, 174, 117);
  border-radius: 10px 10px 10px 10px;
`;

export const FormSelect = styled.select`
  font-size: 20px;
  padding: 8px;
  border: 2px solid rgb(3, 174, 117);
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(214, 245, 205);
`;

export const FormButton = styled.button`
  font-size: 20px;
  padding: 12px;
  margin-right: 10px;
  border-radius: 50px 50px 50px 50px;
  border: 2px solid rgb(3, 174, 117);
  background-color: white;

  &:hover {
    background-color: aquamarine;
  }

  &:active {
    background-color: rgb(18, 176, 124);
  }
`;

export const Paragraph = styled.p`
  margin-left: 55%;
  font-style: italic;
  font-weight: bold;
  border: 2px solid green;
  border-radius: 50px;
  background-color: rgb(202, 245, 222);
`;

export const Footer = styled.div`
  margin: -7% 0% 12% 50%;
  font-style: italic;
  font-weight: bold;
  border: 2px solid green;
  border-radius: 50px;
  background-color: rgb(202, 245, 222);
`;
