// filter
const nums = [10,23,13,33,50,6,17,27,9,20];
const bigNum = nums.filter(num=> num>20);
const smllNum = nums.filter(num=> num<20);

// console.log(bigNum);
// console.log(smllNum);

const products = [
    {name:'phone', price:10000, color:'black' },
    {name:'watch', price:3000, color:'blue' },
    {name:'botole', price:150, color:'green' },
    {name:'bag', price:1200, color:'black' },
    {name:'flower', price:200, color:'red' },
    {name:'brach light', price:10000, color:'white' }
];

const exoensive = products.filter(p=>p.price>200);
// console.log(exoensive);
// find
const exw = products.find(p=>p.color=='black');
console.log(exw);
