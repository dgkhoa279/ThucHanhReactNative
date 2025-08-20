
class Rectangle {
    constructor(public width:number,public height:number){}
    calculateArea(): number {
        return this.width*this.height
    }
     getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const hcn1: Rectangle = new Rectangle(10, 20);
console.log("Diện tích:", hcn1.calculateArea());
console.log("Chu vi:", hcn1.getPerimeter());
