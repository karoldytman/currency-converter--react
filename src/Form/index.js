import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = ({ result, calculateExchange }) => {
    const [currency, setCurrency] = useState(currencies[0]);
    const [amount, setAmount] = useState("");

const onFormSubmit = (event) => {
    event.preventDefault();
    calculateExchange(amount, currency);
};
const onChangeCurrency = ({ target }) => {
const selectCurrency = currencies.find(currency => currency.name === target.value);
setCurrency(selectCurrency);
};
const onFormReset = () => {
    setAmount("");
    setCurrency(currencies[0].id);
};

return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicz waluty
                </legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota do przeliczenia*</span>

                             <input 
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__field"
                            type="number" 
                            name="amount"
                            step="0.01" 
                            required placeholder="Wpisz kwotę" 
                            /> PLN
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Wybierz walutę:</span>
                            <select
                            className="form__field form__field--select"
                            value={currency.name}
                            onChange={onChangeCurrency}>
                            {currencies.map(currency => (<option key={currency.id}>{currency.name}</option>))};
                            </select>
                    </label>
                </p>
                <button 
                onClick={() => calculateExchange(amount, currency)}
                className="form__button"
                type="submit"
                >Przelicz
                </button>

                <button className="form__button" type="reset">Wyczyść</button>
            </fieldset>
            <p className="form__paragraph"> Pola oznaczone * są wymagane</p>
            <p className="footer__header footer__header--width">Kwota po przeliczeniu:
            <strong>
        {result ? ` ${result.targetAmount.toFixed(2)} ${result.currency.id}` : "N/A"}</strong> 
        </p>
        <p className="footer__paragraph">Aktualny kurs z dnia 08-12-2022r.</p>
        </form>
    
);
}

export default Form; 