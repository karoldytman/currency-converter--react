export const Result = ({ result }) => (
   <p> {result !== undefined && (
        <>
        {result.sourceAmount.toFixed(2)}
        <strong>
            {result.targetAmount.toFixed(2)}{result.currency}
            </strong> 
            </>
             )}
</p>
);
