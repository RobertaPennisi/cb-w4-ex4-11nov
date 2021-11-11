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
    renderOtherProducts(wrapperOtherProducts);
    
    
    azSort.addEventListener('click', () => {
        products.sort((a, b) => (a.title > b.title) ? 1 : -1);
        
        while(wrapperProducts.firstChild) wrapperProducts.removeChild(wrapperProducts.lastChild);
        renderProducts(wrapperProducts)
    });

    priceSort.addEventListener('click', () => {
        products.sort((a, b) => (a.price > b.price) ? 1 : -1);
        
        while(wrapperProducts.firstChild) wrapperProducts.removeChild(wrapperProducts.lastChild);
        renderProducts(wrapperProducts)
    });
});


let products = [];
const wrapperProducts = document.querySelector(".wrapper__products");
const wrapperOtherProducts = document.querySelector(".wrapper__newproducts");
const azSort = document.querySelector("#a-z-sort");
const priceSort = document.querySelector("#price-sort");

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


