import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ result, calculateResult, }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
};

const onFormReset = () => {
    setAmount("");
    setCurrency(currencies[0].short);
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
                            placeholder="Wpisz kwote"
                            className="form__field"
                            type="number" 
                            step="0.01" 
                            required
                            /> PLN
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Wybierz walutę:</span>
                            <select
                            className="form__field form__field--select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}>
                            {currencies.map(currency => (<option key={currency.short} 
                            value={currency.short}>{currency.name}</option>))};
                            </select>
                    </label>
                </p>
                <button 
                className="form__button"
                >Przelicz
                </button>

                <button className="form__button" type="reset">Wyczyść</button>
            </fieldset>
            <p className="form__paragraph"> Pola oznaczone * są wymagane</p>
            <p className="footer__header footer__header--wshortth">Kwota po przeliczeniu:
        </p>
        <p className="footer__paragraph">Aktualny kurs z dnia 08-12-2022r.</p>
        <Result resutl={result} />
        </form>
    
)
}
