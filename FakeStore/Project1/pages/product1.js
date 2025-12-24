async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const productList = document.getElementById("productRow");
    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("container", "row");


      d.innerHTML = `
         <div class="row border border-1 border-black m-2 shadow rounded-2 bg-secondary-subtle py-2 ">
            <div class="col-3 border-1 ">
              <img src=${element.image} class="w-100 h-75" alt="" />
            </div>
            <div class="col-9 ms-9 mt-5">
              <div class="fw-bold fs-3">${element.title}</div>
              <div class="fw-bold fs-4">₹-${element.price*100}/-</div>
              <div>${element.rating.rate}/5 , ${element.rating.count}</div>
              <div>${element.description}</div>

              <div class="mt-5">
                    <button class="btn btn-info text-white fw-bold">
                Add To Cart
              </button>
              <button class="btn btn-warning w-25 text-white fw-bold">
                Buy Now
              </button>
              </div>
              
            </div>
          </div>

       `;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();
