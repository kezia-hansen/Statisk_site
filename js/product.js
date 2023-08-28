// Fetch the data from the provided API
fetch("https://kea-alt-del.dk/t7/api/products?limit=50&start=10")
  .then((res) => res.json()) // Parse the response as JSON
  .then((data) => showProduct(data)); // Call the showProduct function with the parsed data

function showProduct(product) {
  console.log(product);
  document.querySelector("purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector("purchaseBox .brand").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/jpg/640/${product.id}.jpg`;
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
