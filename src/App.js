import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function App() {

  const [result, setResult] = useState(null);
  const calculateExchange = (currency, amount) => {
    const rate = currency?.ratio;
    setResult({
      sorceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
 
  }
  return (

    <Container>
      <Header title="Kalkulator walut" />
        
        <Form />
       <Footer />
    </Container>
  );
}

export default App;
