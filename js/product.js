// fetch
fetch("https://kea-alt-del.dk/t7/api/products/1533")
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product-info h3").textContent = product.productdisplayname;
  document.querySelector(".product-info .brand").textContent = product.brandname;
  document.querySelector(".cat_prod img").src = `https://kea-alt-del.dk/t7/images/jpg/640/${product.id}.jpg`;
}
