 import { otherProducts } from "./products.js";
 
 function createProduct(parent, imgUrl, prodTitle, prodPrice) {
     const product = document.createElement("div");
     product.className = "product";

     createImg(product, imgUrl, prodTitle);
     createText(product, prodTitle, prodPrice);
     
     parent.appendChild(product)
 }

function createImg(parent, imgUrl, prodTitle) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = prodTitle;

    parent.appendChild(image);
}

function createText(parent, prodTitle, prodPrice) {
    const title = document.createElement("h4");
    title.textContent = prodTitle;

    const price = document.createElement("strong");
    price.textContent = `${prodPrice} €`;

    parent.append(title, price);
}



fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    products = data;
    renderProducts(wrapperProducts);
   // renderProducts(wrapperJewelry);
    renderOtherProducts(wrapperJewelry)
});


let products = [];
const wrapperProducts = document.querySelector(".wrapper__products");
const wrapperJewelry = document.querySelector(".wrapper__jewelry");

function renderProducts(parent) {
     products.map((product) =>{
         createProduct(parent, product.image, product.title, product.price)
     });
};

function renderOtherProducts(parent) {
    otherProducts.map((product) =>{
        createProduct(parent, product.imgUrl, product.name, product.price)
    });
};
