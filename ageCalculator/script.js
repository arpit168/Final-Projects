const d1 = document.getElementById("date").value;
const m1 = document.getElementById("month").value;
const y1 = document.getElementById("year").value;

function age() {
  const d1 = document.getElementById("date").value;
  const m1 = document.getElementById("month").value;
  const y1 = document.getElementById("year").value;

  let date = new Date();
  let birth = new Date(y1, m1 - 1, d1);
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  const month = [31, 28, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  if (birth < 0) {
    alert("Please enter your date of birth first!");
    return;
  }
  if (birth > date) {
    alert("Invailid year!");
    return;
  }
  if(m2 > 12){
    alert("Please check Your month")
    return
  }
  if(d1 > 31){
    alert("Please check your date!")
    return
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;
  document.getElementById("age").innerHTML =
    "Your age is " + y + " Years " + m + " Months " + d + " Days";
}
