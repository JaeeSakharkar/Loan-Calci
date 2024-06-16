import React from "react";
import {useState} from "react";
const Loancalci=()=>{
    const[loanamount,setloanamount]=useState("");
    const[Loantenure,setLoantenure]=useState("");
    const[InterestRate,setInterestRate]=useState("");
    const[emiAmount,setemiAmount]=useState(0);
    const[totalinterest,settotalinterest]=useState(0);
    const[totalpayment,settotalpayment]=useState(0);
    const[error,seterror]=useState(0);
    const calculateLoan=()=>
        {
            if(!loanamount || parseFloat(loanamount)<=0){
                alert("Please enter the amount.");
                return;
            }
            if(!Loantenure || parseFloat(Loantenure)<=0){
                alert("Please enter the tenure.");
                return;
            }
            if(!InterestRate || parseFloat(InterestRate)<=0){
                alert("Please enter the interest rate.");
                return;
            }
            const principle = parseFloat(loanamount);
            const rate = parseFloat(InterestRate)/100/12;
            const time = parseFloat(Loantenure)*12;
            const x = Math.pow(1+rate,time);
            const emi = (principle*rate*x)/(x-1);
            const totalPaymentValue = emi*time;
            const totalinterestValue = totalPaymentValue-principle;
            setemiAmount(emi.toFixed(2));
            settotalinterest(totalinterestValue.toFixed(2));
            settotalpayment(totalPaymentValue.toFixed(2));
            seterror("");
        }
    return(
        <center>
        <div className='loancalci'>
        <h1> Loan Emi Calculator</h1>
        <label>Loan Amount (in &#8377;):</label>
        <input type = "number" placeholder='Enter Loan Amount' onChange={(e)=>setloanamount(e.target.value)} />
        <p><label>Tenure:</label>
        <input type = "number" placeholder='Enter number of years.' onChange={(e)=>setLoantenure(e.target.value)}/>
        </p>
        <p><label>Interest:</label>
        <input type = "number" placeholder='Enter Interest(%)' onChange={(e)=>setInterestRate(e.target.value)}/>
        </p>
        <br/>
        <br/>
        <button onClick={calculateLoan} className="btn">Calculate Amount</button>
        </div>
        <div className='output'>
            <h2>Loan Deatails</h2>
            <p className="ans">EMI Amount:&#8377;{emiAmount}</p>
            <p className="ans">Total Interest Payable:&#8377;{totalinterest}</p>
            <p className="ans">Total Payment:&#8377;{totalpayment}</p>
        </div>
        </center>
    );
}
export default Loancalci;