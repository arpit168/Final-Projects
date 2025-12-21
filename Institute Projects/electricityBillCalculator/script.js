 function calculateBill() {
    const units = parseInt(document.getElementById("units").value);

    if (!units || units <= 0) {
      alert("Please enter valid electricity units");
      return;
    }

    const slab1Units = Math.min(units, 50);
    const slab2Units = Math.min(Math.max(units - 50, 0), 150);
    const slab3Units = Math.min(Math.max(units - 200, 0), 250);
    const slab4Units = Math.max(units - 450, 0);

    const slab1 = slab1Units * 0.5;
    const slab2 = slab2Units * 0.75;
    const slab3 = slab3Units * 1.2;
    const slab4 = slab4Units * 1.5;

    const subtotal = slab1 + slab2 + slab3 + slab4;
    const surcharge = subtotal * 0.2;
    const total = subtotal + surcharge;

    document.getElementById("slab1").innerText = `₹${slab1.toFixed(2)}`;
    document.getElementById("slab2").innerText = `₹${slab2.toFixed(2)}`;
    document.getElementById("slab3").innerText = `₹${slab3.toFixed(2)}`;
    document.getElementById("slab4").innerText = `₹${slab4.toFixed(2)}`;
    document.getElementById("subtotal").innerText = `₹${subtotal.toFixed(2)}`;
    document.getElementById("surcharge").innerText = `₹${surcharge.toFixed(2)}`;
    document.getElementById("grandTotal").innerText = `₹${total.toFixed(2)}`;

    document.getElementById("result").classList.remove("d-none");
  }

  function resetForm() {
    document.getElementById("units").value = "";
    document.getElementById("result").classList.add("d-none");
  }