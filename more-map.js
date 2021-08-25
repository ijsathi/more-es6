// string map
const pruducts = [
    {name:'phone', price:10000, color:'black' },
    {name:'watch', price:3000, color:'blue' },
    {name:'botole', price:150, color:'green' },
    {name:'bag', price:1200, color:'black' },
    {name:'flower', price:200, color:'red' },
    {name:'brach light', price:10000, color:'white' }
];
const productName = pruducts.map(pruduct => pruduct.name);
const productPrice = pruducts.map(pruduct => pruduct.price);
const productColor = pruducts.map(pruduct => pruduct.color);

console.log(productName);
console.log( productPrice);
console.log(productColor);



