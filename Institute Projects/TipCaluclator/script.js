function  calculate() {
  event.preventDefault();

  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const total = document.getElementById("total").value;
  const result = document.getElementById("result");


  if(amount==="" || amount <= 0) {
    result.innerHTML = `<div class="alert alert-danger"> Please enter a valid bill amount!</div>`;
    return;
  }
  if(category === "") {
    result.innerHTML =`<div class="alert alert-danger"> Please select service Quality!</div>`;
    return;
  }
  if(total==="" || total<=0) {
    result.innerHTML=`<div class="alert alert-danger">Please enter number of persons!</div>`;
    return;
  }
  const tipPercentage =parseInt(category);

  const tipAmount = (amount * tipPercentage) / 100;
  const tipPerson = tipAmount / total;
  const totalPerPerson = (parseFloat(amount) + tipAmount) / total;



result.innerHTML=`
<div class="alert alert-success">
<h5>Tip Details </h5>
<p><strong>Total Tip:</strong></p> ₹${tipAmount.toFixed(2)}</p>
<p><strong>Tip Per Person:</strong></p> ₹${tipPerson.toFixed(2)}</p>
<p><strong>Total Amount Per Person:</strong> ₹${totalPerPerson.toFixed(2)}</p>
</div>
`;
}