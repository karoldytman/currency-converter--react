import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = ({ result, claculateExchange }) => {
    const [currency, setCurrency] = useState(currency[0]);
    const [amount, setAmont] = useState("");

const onFormSubmit = (event) => {
    event.preventDefoult();
    claculateExchange(amount, currency);
};
const onChangeCurrency = ({ target }) => {
const selectCurrency = currencies.find(currency => currency.name === target.value);
setCurrency(selectCurrency);
};

return (
    <form onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicz waluty
                </legend>

                <p>
                    <label><span className="form__labelText">
                            Kwota do przeliczenia*: </span><input className="form__field" type="number"
                            step="0.01" required placeholder="Wpisz kwotę">PLN</input>
                    </label>
                </p>
                <p>
                    <label><span className="form__labelText">
                            Wybierz walutę:</span> <select className="form__field form__field--select"
                            name="waluta">
                           
                        </select>
                    </label>
                </p>
                <button className="form__button">Przelicz</button>
                <button className="form__button" type="reset">Wyczyść</button>
            </fieldset>
            <p className="form__paragraph"> Pola oznaczone * są wymagane</p>
        </form>
)
};

export default Form; 