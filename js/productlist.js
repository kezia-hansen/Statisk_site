// Fetch the data from the provided API
fetch("https://kea-alt-del.dk/t7/api/products?limit=50&start=10")
  .then((res) => res.json()) // Parse the response as JSON
  .then(showProducts); // Call the showProduct function with the parsed data

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);

  // fange template
  const template = document.querySelector("#smallProductTemplate").content;

  // lave en kopi
  const copy = template.cloneNode(true);

  // ændre indhold
  copy.querySelector("h3").textContent = product.price;

  copy.querySelector("p.pris").textContent = product.productdisplayname;

  copy.querySelector("p.tag").textContent = product.articletype;

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

  if (product.soldout) {
    // produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article.product").classList.add("onSale");
    copy.querySelector("p.discounted").textContent = product.discount + "%";
  }

  // img
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  // appende
  document.querySelector("main").appendChild(copy);
}

/* {
  "id": 1533,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "basecolour": "Red",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Cat Red T-shirt",
  "parsed": 1,
  "soldout": 0,
  "relid": 1533,
  "price": 899,
  "discount": null,
  "variantname": "Cat",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Men",
  "colour1": "",
  "colour2": "",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "styledesc": null
} */
