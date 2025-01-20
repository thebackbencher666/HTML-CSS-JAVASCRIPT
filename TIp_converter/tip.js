const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercentage");
const calculateBtn = document.getElementById("calculateBtn");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billAmount.value);
  const tipAmount = parseFloat(tipPercentage.value);
  if (isNaN(bill) || isNaN(tipPercentage) || bill <=0 || tipPercentage <0){
    alert("Please enter valid values");
    return;
  }
  const Calculatedtip = bill * (tipPercentage / 100);
  const total = bill + tipPercentage;
  tipAmount.textContent = Calculatedtip.toFixed(2);
  totalAmount.textContent = total.toFixed(2);
});