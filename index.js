document.getElementById('loanForm').addEventListener('submit', function (event) {
  event.preventDefault();
  window.location.href = `otp.html?fullName=${encodeURIComponent(document.getElementById('fullName').value)}&email=${encodeURIComponent(document.getElementById('email').value)}`;
});

function calculateLoan() {
  const loanAmountInput = document.getElementById('loanAmount');
  const loanAmountInWords = document.getElementById('loanAmountInWords');
  const loanAmount = parseInt(loanAmountInput.value, 10);

  if (isNaN(loanAmount) || loanAmount <= 0) {
    alert('Please enter a valid loan amount.');
    return;
  }

  
  // CalculatING EMI
  const interestRate = 8.5; // in percentage
  const tenureInYears = 15;

  const monthlyInterestRate = interestRate / 1200; // IT IS Monthly interest rate
  const numberOfPayments = tenureInYears * 12;

  const emi = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  
  alert(`Estimated EMI: ${emi.toFixed(2)} Rs.`);
};



// Function to generate OTP
// function generateOTP() {
//     const OTP = Math.round(Math.random() * 10000 + 1000);
//     alert(OTP);
//     localStorage.setItem('mainOTP', OTP);
// }
// // Function to validate OTP
// function checkOTP() {
//     const userOtp = parseInt(document.getElementById('userOtp').value);
//     const mainOtp = parseInt(localStorage.getItem('mainOTP'));
//     if (mainOtp === userOtp) {
//         alert('OTP verify Successfully');
//     } else {
//         alert('Failed');
//     }
//     clearOTPField();
//     return false;
// }
// // Function to clear OTP field after validation
// function clearOTPField() {
//     document.getElementById('userOtp').value = '';
// }

// // Function to display EMI on the webpage
// function displayEMI(emi) {
//     document.getElementById('emi').textContent = '₹' + emi.toFixed(2);
// }
// // Function to calculate EMI
// function calculateEMI() {
//     const loanAmount = parseFloat(document.getElementById('loanAmount').value);
//     const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
//     const loanTenureYears = parseFloat(document.getElementById('loanTenure').value);
//     const monthlyInterestRate = (annualInterestRate / 12) / 100;
//     const loanTenureMonths = loanTenureYears * 12;
//     const emi = calculateEMIFormula(loanAmount, monthlyInterestRate, loanTenureMonths);
//     displayEMI(emi);
// }
// // Function to calculate EMI using the provided formula
// function calculateEMIFormula(loanAmount, monthlyInterestRate, loanTenureMonths) {
//     const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenureMonths)) / (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1);
//     return emi;
// }
// // Function to handle form submission
// function handleFormSubmission(event) {
//     event.preventDefault();
//     generateOTP();
//     confirmPage();
// }
// // Function to redirect to confirmation page
// function confirmPage() {
//     window.location.href = "./confirm.html";
// }
// // Add event listeners
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('calculateEMI').addEventListener('click', calculateEMI);
//     document.getElementById('myform').addEventListener('submit', handleFormSubmission);
//     document.getElementById('validateOTP').addEventListener('click', checkOTP);
//     document.getElementById('backButton').addEventListener('click', goBack);
// });
// // Function to go back
// function goBack() {
    
// }