function Submit() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();
  const db = document.getElementById("dob").value.trim();

  if (!/^[A-Z]+[A-Za-z ]+$/.test(nm)) {
    alert("Please enter a valid name!");
    return;
  }

  if (
    !/^[A-Za-z0-9._%+-]+@(gmail|yahoo|outlook|icloud)\.(com|in|co.in)$/.test(em)
  ) {
    alert("Please enter a valid email!");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(ph)) {
    alert("Please enter a valid 10-digit phone number!");
    return;
  }

  const currentyear = new Date().getFullYear;

  const birthyear = Number(db.split("-")[0]);

    console.log(currentyear, birthyear);

  if(currentyear-birthyear < 17 ) {
    alert("Not Eligible by age")
    return;
  }

  const data = {
    FullName: nm,
    Email: em,
    Phone: ph,
    DOB: db,
  };

  console.log(data);
  alert("🎉 You won 7 crore , Form Submitted Successfully");
}
