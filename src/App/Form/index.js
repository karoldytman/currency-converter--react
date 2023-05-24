import {
  FormFieldset,
  FormLegend,
  LabelText,
  FormField,
  FormSelect,
  FormButton,
  Paragraph,
  Footer,
} from "./styled";
import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";

const Form = ({ calculateResult, result, setResult }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const resetResult = () => {
    setResult();
  };

  const onFormReset = () => {
    setAmount("");
    setCurrency(currencies[0].short);
    resetResult();
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <FormFieldset>
        <FormLegend>Przelicz waluty</FormLegend>
        <p>
          <label>
            <LabelText>Kwota do przeliczenia*</LabelText>
            <FormField
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwote"
              type="number"
              step="0.01"
              required
            />{" "}
            PLN
          </label>
        </p>
        <p>
          <label>
            <LabelText>Wybierz walutę:</LabelText>
            <FormSelect
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </FormSelect>
          </label>
        </p>
        <FormButton>Przelicz</FormButton>

        <FormButton type="reset">Wyczyść</FormButton>
      </FormFieldset>
      <Paragraph> Pola oznaczone * są wymagane</Paragraph>

      <Result result={result} />
      <Footer>Aktualny kurs z dnia 08-12-2022r.</Footer>
    </form>
  );
};

export default Form;
