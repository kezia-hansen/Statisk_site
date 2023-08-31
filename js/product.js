const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// fetch
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product-info h2").textContent = product.productdisplayname;
  document.querySelector(".product-info .discount").textContent = product.discount + "%";

  if (product.discount) {
    document.querySelector(".product-info .discount").textContent = product.discount + "%";
  } else {
    document.querySelector(".product-info .discount").style.display = "none";
  }

  if (product.soldOut) {
    document.querySelector(".product-info .solgtUd").textContent = product.soldout + " Udsolgt";
  } else {
    document.querySelector(".product-info .solgtUd").style.display = "none";
  }

  document.querySelector(".product-info .price").textContent = product.price + "DKK";
  document.querySelector(".info-section .brand").textContent = product.brandname;
  document.querySelector(".info-section .gender").textContent = product.gender;
  document.querySelector(".info-section .color").textContent = product.basecolour;

  document.querySelector(".cat_prod img").src = `https://kea-alt-del.dk/t7/images/jpg/640/${product.id}.jpg`;
}
solgtUd;
