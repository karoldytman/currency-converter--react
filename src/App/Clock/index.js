import { ClockStyled } from "./styled";
import { useClock } from "./useClock"

const CurrentDate = (date) => date.toLocaleString();

const Clock = () => {
const date = useClock();
  return (
    <ClockStyled>
      Data: {CurrentDate(date)}
    </ClockStyled>
  );
};

export default Clock;
