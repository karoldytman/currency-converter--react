import { ResultStyled } from "./styled";
const Result = ({ result }) => (
  <ResultStyled>
    Kwota po przeliczeniu:
    {result !== undefined && (
      <>
        <strong>
          {result.targetAmount.toFixed(2)}
          {result.currency}
        </strong>
      </>
    )}
  </ResultStyled>
);

export default Result;
