import Container from "./Container";
import { Form } from "./Form";
import Header from "./Header";
import { useState } from "react";
import { currencies } from "./currencies";

function App() {

  const [result, setResult ] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
    .find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
 
  }
  
  return (

    <Container>
      <Header title="Kalkulator walut" />
        
        <Form result={result} 
        calculateResult={calculateResult} 
        />
    </Container>
  );
}

export default App;
