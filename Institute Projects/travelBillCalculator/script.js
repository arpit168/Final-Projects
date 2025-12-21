 function calculateBill() {
    const kmInput = document.getElementById("km");
    const error = document.getElementById("kmError");
    const result = document.getElementById("result");

    error.innerText = "";
    result.classList.add("d-none");

    let km = parseFloat(kmInput.value);

    // Validation
    if (kmInput.value === "" || isNaN(km) || km < 0) {
      error.innerText = "Please enter a non-negative number of kilometres";
      return;
    }

    let slab1Km = Math.min(km, 10);
    let slab2Km = Math.min(Math.max(km - 10, 0), 40);
    let slab3Km = Math.max(km - 50, 0);

    let slab1 = slab1Km * 11;
    let slab2 = slab2Km * 10;
    let slab3 = slab3Km * 9;

    let total = slab1 + slab2 + slab3;

    document.getElementById("slab1").innerText =
      `${slab1Km.toFixed(2)} km * ₹11 = ₹${slab1.toFixed(2)}`;
    document.getElementById("slab2").innerText =
      `${slab2Km.toFixed(2)} km * ₹10 = ₹${slab2.toFixed(2)}`;
    document.getElementById("slab3").innerText =
      `${slab3Km.toFixed(2)} km * ₹9 = ₹${slab3.toFixed(2)}`;

    document.getElementById("total").innerText =
      `₹${total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

    result.classList.remove("d-none");
  }