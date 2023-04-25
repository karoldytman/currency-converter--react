import "./style.css";
export const Result = ({ result }) => (
   <p className="result"> 
   Kwota po przeliczeniu:
    {result !== undefined && (
        <>
        {result.sourceAmount.toFixed(2)}&nbsc;PLN&nbsc;=&nbsc;
        <strong>
            {result.targetAmount.toFixed(2)}&nbsc;{result.currency}
            </strong> 
            </>
             )} 
</p>
);
