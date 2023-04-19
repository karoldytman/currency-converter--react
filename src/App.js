import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import { useState } from "react";

function App() {

  const [result, setResult] = useState("");
  const calculateExchange = (currency, amount) => {
    const rate = currency?.ratio;
    setResult({
      sourceAmount: +amount,
      targetAmount: +amount / rate,
      currency
    });
 
  };
  
  return (

    <Container>
      <Header title="Kalkulator walut" />
        
        <Form result={result} calculateExchange={calculateExchange} 
        />
    </Container>
  );
}

export default App;
