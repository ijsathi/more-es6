// destructuring Object
const company = {
    name : 'GP',
    ceo : {
        name:'Jakir', 
        id:133, 
        food:'fuska'
    },
    web : {
        work:'web site', 
        employee:22,
        ages:10}
}
const {ages,work} = company.web;
const {food} = company.ceo;
console.log(ages,work,food);