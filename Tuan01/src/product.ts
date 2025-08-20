class Product {
    constructor(public name:string,public price:number){}
}
const products:Product[] = [
    new Product("IphoneX",200),
    new Product("Iphone4",50),
    new Product("Iphone6",120),
]

const productFilter = products.filter(p => p.price > 100)
console.log(productFilter);

