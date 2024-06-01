const user = {id:1, name: 'gorib amir', job:'actor'};
// javascript object notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

/* output :
{ id: 1, name: 'gorib amir', job: 'actor' }       
{"id":1,"name":"gorib amir","job":"actor"}        
*/

const shop = {
    owner: 'aliya',
    address: {
        street: 'kochukhet er gali',
        city: 'dhaka',
        country: 'bd'
    },
    products: ['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNow: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
