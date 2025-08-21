class Product {
    constructor(public name:string,public price:number){}
}
class Order {
    products:Product[] = []
    addProduct(product:Product):void {
        this.products.push(product)
    }
    totalPrice():number {
        return this.products.reduce((sum,p)=> sum+p.price,0)
    }
}
const p1:Product = new Product("Apple",200)
const p2:Product = new Product("Lichi",400)
const p3:Product = new Product("Longan",100)
const order:Order = new Order()
order.addProduct(p1);
order.addProduct(p2);
order.addProduct(p3);
console.log(order.totalPrice());
