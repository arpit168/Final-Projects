function Submit() {
  const fullName = document.getElementById("fullName").value.trim();
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const study = document.getElementById("study").value;
  const persuing = document.getElementById("persuing").value.trim();
  const grade = document.getElementById("grade").value.trim();
  const prefferCourse = document.getElementById("prefferCourse").value;
  const prefferTiming = document.getElementById("prefferTiming").value;
  const fullAddress = document.getElementById("fullAddress").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const pinCode = document.getElementById("pinCode").value.trim();
  const guardianFullName = document
    .getElementById("guardianFullName")
    .value.trim();
    const gurRelation = document.getElementById("gurRelation").value.trim();
  const gurContact = document.getElementById("gurContact").value.trim();
  const additional = document.getElementById("additional").value.trim();

  if (fullName === "") {
    alert("Please enter full name.");
    return;
  }

  if (gender === "") {
    alert("Please select gender");
    return;
  }
  if (dob === "") {
    alert("Please enter date of birth.");
    return;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a vailid 10 digit mobile number");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a vailid email");
    return;
  }
  if (fullAddress === "" || city === "" || state === "" || pinCode === "") {
    alert("Please complete address details");
    return;
  }
  if (guardianFullName === "" || gurRelation === "" || gurContact === "") {
    alert("Please complete guardian details");
    return;
  }

  const formData = {
    fullName,
    gender,
    dob,
    phone,
    email,
    study,
    persuing,
    grade,
    prefferCourse,
    prefferTiming,
    fullAddress,
    city,
    state,
    pinCode,
    guradianFullName,
    gurRelation,
    gurContact,
    additional,
  };
 alert("Form Submitted Successfully!");
alert("🎉Form submitted successfully!")
console.log(formData);

}
