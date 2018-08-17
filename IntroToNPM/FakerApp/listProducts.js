var faker = require("faker");


console.log("WELCOME TO THE SHOP")

for(var i=0; i<10; i++)
{
    console.log(faker.fake("{{commerce.productAdjective}} {{commerce.productMaterial}} {{commerce.product}} - {{commerce.price}}"));
}