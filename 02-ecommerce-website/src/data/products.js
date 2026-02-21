import items_1 from '../assets/products/product_1.png'
import items_2 from '../assets/products/product_2.png'
import items_3 from '../assets/products/product_3.png'
import items_4 from '../assets/products/product_4.png'
import items_5 from '../assets/products/product_5.png'
import items_6 from '../assets/products/product_6.png'
import items_7 from '../assets/products/product_7.png'
import items_8 from '../assets/products/product_8.png'
import items_9 from '../assets/products/product_9.png'
import items_10 from '../assets/products/product_10.png'

/* MAIN PRODUCT DATABASE */
const products = [
    { id: 1, name: "Women Plain Pure Cotton Shirt", price: 149, category:"Women", type:"Topwear", image: items_1 },
    { id: 2, name: "Women Round Neck Cotton Top", price: 189, category:"Women", type:"Topwear", image: items_2 },
    { id: 3, name: "Men Round Neck Pure Cotton T-shirt", price: 99, category:"Men", type:"Topwear", image: items_3 },
    { id: 4, name: "Men Printed Plain Cotton Shirt", price: 249, category:"Men", type:"Topwear", image: items_4 },
    { id: 5, name: "Women Round Neck Cotton Top", price: 199, category:"Women", type:"Topwear", image: items_5 },
    { id: 6, name: "Men Round Neck Pure Cotton T-shirt", price: 129, category:"Men", type:"Topwear", image: items_6 },
    { id: 7, name: "Men Regular Fit Trousers", price: 189, category:"Men", type:"Bottomwear", image: items_7 },
    { id: 8, name: "Men Polo Collar T-Shirt", price: 159, category:"Men", type:"Topwear", image: items_8 },
    { id: 9, name: "Kids Casual T-Shirt", price: 179, category:"Kids", type:"Topwear", image: items_9 },
    { id: 10, name: "Casual Cotton T-shirt", price: 169, category:"Men", type:"Topwear", image: items_10 },
];

/* BEST SELLERS (DO NOT DUPLICATE OBJECTS) */
/* only store ids */
const bestSellerIds = [3,4,6,8,10];

/* create best seller list automatically */
const best_seller = products.filter(product =>
    bestSellerIds.includes(product.id)
);

export { products, best_seller };