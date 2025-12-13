function Submit(event) {
  event.preventDefault();

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

  // Full name

  if (!fullName) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(fullName)) {
    document.getElementById("NameError").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
  }

  // Gender

  if (gender === "") {
    alert("Please select gender");
    return;
  }

  // ḌOB

  if (!dob) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else {
    const currentyear = new Date().getFullYear();
    const birthyear = Number(dob.split("-")[0]);
    if (currentyear - birthyear < 18) {
      document.getElementById("DOBError").innerText =
        "You must be 18 years Old";
      return;
    }
  }

  // Phone

  if (!phone) {
    document.getElementById("PhoneError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById("PhoneError").innerText =
      "Only Indian Mobile Nummber allowed";
    return;
  }

  // Email

  if (!email) {
    document.getElementById("EmailError").innerText = "Required";
    return;
  } else if (
    !/^[\w.]+@(gmail|outlook|rediff|yahoo)\.(com|in|co\.in)$/.test(email)
  ) {
    document.getElementById("EmailError").innerText = "Use Proper Email Format";
    return;
  }

  // Address

  if (fullAddress === "" || city === "" || state === "" || pinCode === "") {
    alert("Please complete address details");
    return;
  }

  // guradian

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
    guardianFullName,
    gurRelation,
    gurContact,
    additional,
  };

  alert("🎉Form submitted successfully!");
  console.log(formData);
}
