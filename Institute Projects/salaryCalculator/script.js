 function calculateGrossSalary(basic) {
    const hra = basic * 0.20;
    const da = basic * 0.10;
    const gross = basic + hra + da;

    return { basic, hra, da, gross };
  }

  function handleCalculate() {
    const basicInput = document.getElementById("basicSalary");
    const error = document.getElementById("error");
    const spinner = document.getElementById("spinner");
    const result = document.getElementById("result");
    const successMsg = document.getElementById("successMsg");
    const btn = document.getElementById("calcBtn");

    error.innerText = "";
    result.classList.add("d-none");
    successMsg.classList.add("d-none");

    const basic = parseFloat(basicInput.value);

    // Validation
    if (basicInput.value === "" || isNaN(basic) || basic < 0) {
      error.innerText = "Please enter a valid salary (≥ 0)";
      return;
    }

    // UX: loading simulation
    btn.disabled = true;
    spinner.classList.remove("d-none");

    setTimeout(() => {
      const data = calculateGrossSalary(basic);

      document.getElementById("resBasic").innerText =
        formatINR(data.basic);
      document.getElementById("resHra").innerText =
        formatINR(data.hra);
      document.getElementById("resDa").innerText =
        formatINR(data.da);
      document.getElementById("resGross").innerText =
        formatINR(data.gross);

      spinner.classList.add("d-none");
      result.classList.remove("d-none");
      successMsg.classList.remove("d-none");
      btn.disabled = false;
    }, 500);
  }

  function resetForm() {
    document.getElementById("basicSalary").value = "";
    document.getElementById("result").classList.add("d-none");
    document.getElementById("successMsg").classList.add("d-none");
    document.getElementById("error").innerText = "";
  }

  function formatINR(amount) {
    return "₹" + amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }