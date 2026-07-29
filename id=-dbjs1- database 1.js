function addProduct(name, category, price, image){

let products = JSON.parse(localStorage.getItem("products")) || [];

products.push({
    name:name,
    category:category,
    price:price,
    image:image
});

localStorage.setItem("products", JSON.stringify(products));

alert("Product Added Successfully!");
}