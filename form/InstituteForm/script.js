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

  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  if (!fullName) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(fullName)) {
    document.getElementById("NameError").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
    console.log(2);
  }

  if (!gender) {
    document.getElementById("GenderError").innerText = "Choose your gender";
    return;
  }

  if (!dob) {
    document.getElementById("dobError").innerText = "Required";
    return;
  } else {
    const currentyear = new Date().getFullYear();
    const birthyear = Number(dob.split("-")[0]);
    if (currentyear - birthyear < 18) {
      document.getElementById("dobError").innerText =
        "Your must be 18 years Old";
      return;
    }
  }

  if(!phone) {
    document.getElementById("phoneError").innerText = "Required"
    return;
  } else{
    
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
    guardianFullName,
    gurRelation,
    gurContact,
    additional,
  };

  alert("🎉Form submitted successfully!");
  console.log(formData);
}
