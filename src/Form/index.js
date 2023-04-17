import "./style.css";

const Form = () => {
    <form>
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
                            <option className="js-EUR" value="4.7214" selected>EUR </option>
                            <option className="js-GBP" value="4.4236">GBP</option>
                            <option className="js-USD" value="4.4589">USD</option>

                        </select>
                    </label>
                </p>
                <button className="form__button">Przelicz</button>
                <button className="form__button" type="reset">Wyczyść</button>
            </fieldset>
            <p className="form__paragraph"> Pola oznaczone * są wymagane</p>
        </form>
};

export default Form; 