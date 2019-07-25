document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
    console.log("Calc");
  
    
    
    const Amount =  document.getElementById('loan-amount');
    const Interest = document.getElementById('loan-interest');
    const Years = document.getElementById('loan-years');
    const MonthlyPayment = document.getElementById('monthly');
    const TotalInterest = document.getElementById('total-interest');
    const TotalAmount = document.getElementById('total-amount');

    const principal = parseFloat(Amount.value);
    const calculatedInterest = parseFloat(Interest.value) / 100 / 12;
    const CalculatedPayments = parseFloat(Years.value) * 12;

    const x = Math.pow(1+calculatedInterest, CalculatedPayments);
    const monthly = (principal * x *  calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
       
        MonthlyPayment.value = ("Monthly Payment: "+(monthly.toFixed(2)));
        TotalAmount.value = ("Total Amount: "+ (monthly * CalculatedPayments).toFixed(2));
        TotalInterest.value = ("Total Interest: "+ ((monthly * CalculatedPayments) - principal).toFixed(2));
    } else {
        console.log("Please check your numbers.");
        
    }


    
    
    e.preventDefault();
} 