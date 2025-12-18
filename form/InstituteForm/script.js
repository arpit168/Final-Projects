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
  const guardianFName = document.getElementById("GuardianFName").value.trim();
  const gurRelation = document.getElementById("gurRelation").value.trim();
  const gurContact = document.getElementById("GurContact").value.trim();
  const additional = document.getElementById("additional").value.trim();

  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  // -----------------fullname-----------------

  if (!fullName) {
    document.getElementById("FNameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(fullName)) {
    document.getElementById("FNameError").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
  }
  // ----------------gender-----------------

  if (!gender) {
    document.getElementById("GenderError").innerText = "Choose your gender";
    return;
  }
  // -----------------dob-----------------

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
  // -----------------phone-----------------

  if (!phone) {
    document.getElementById("PhoneError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById("PhoneError").innerText =
      "Only India Phone Numbers are allowed!";
    return;
  }
  // -----------------email-----------------

  if (!email) {
    document.getElementById("EmailError").innerText = "Required";
    return;
  } else if (
    !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email)
  ) {
    document.getElementById("EmailError").innerText = "Use proper email format";
    return;
  }

  // -----------------padhai-likhai-----------------

  if (!study) {
    document.getElementById("StudyError").innerText = "Required";
    return;
  }

  // -----------------school/college ka name-----------------

  if (!persuing) {
    document.getElementById("PersuingError").innerText =
      "Please fill your School/College name";
    return;
  }

  // -----------------grade/precentage-----------------

  if (!grade) {
    document.getElementById("GradeError").innerText =
      "Please fill your Grade/Percentage! ";
    return;
  }

  // -----------------preffercourse-----------------

  if (!prefferCourse) {
    document.getElementById("CourseError").innerText =
      "Please choose your preffered course! ";
    return;
  }

  // -----------------prefertime-----------------

  if (!prefferTiming) {
    document.getElementById("TimeError").innerText =
      "Please choose your preffered batch time! ";
    return;
  }

  // -----------------fulladdress-----------------

  if (!fullAddress) {
    document.getElementById("AddressError").innerText =
      "Please fill your address! ";
    return;
  }

  // -----------------city-----------------

  if (!city) {
    document.getElementById("CityError").innerText =
      "Please fill your City name! ";
    return;
  }
  // -----------------state-----------------

  if (!state) {
    document.getElementById("StateError").innerText =
      "Please fill your State name! ";
    return;
  }

  // -----------------postal-----------------

  if (!pinCode) {
    document.getElementById("PinError").innerText =
      "Please fill your Postal Code! ";
    return;
  }

  // -----------------membername-----------------

  if (!guardianFName) {
    document.getElementById("GNameError").innerText =
      "Please enter your guardian's name!";
    return;
  } else if (!/^[A-Za-z ]+$/.test(guardianFName)) {
    document.getElementById("GNameError").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
  }

  // ----------------rishta-nata-----------------

  if (!gurRelation) {
    document.getElementById("GurRelationError").innerText = "Required!";
    return;
  }
  // -----------------rishtedar ka phone number-----------------

  if (!gurContact) {
    document.getElementById("GurContactError").innerText = "Required!";
    return;
  } else if (!/^[6-9]\d{9}$/.test(gurContact)) {
    document.getElementById("GurContactError").innerText =
      "Only India Phone Numbers are allowed!";
    return;
  }

  // -----------------adhik jankari-----------------

  if (!additional) {
    document.getElementById("AdditionalError").innerText = "Required!";
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
    guardianFName,
    gurRelation,
    gurContact,
    additional,
    
  };
  
 

  alert("🎉Form submitted successfully!");
  console.log(formData);
  location.reload();
}
