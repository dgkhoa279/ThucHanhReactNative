abstract class Shape{
    abstract area():number
}
class Square extends Shape {
    constructor(public slide:number){
        super()
    }
    area(): number {
        return this.slide * this.slide
    }
}
class Circle extends Shape {
    constructor(public radius: number){
        super()
    }
    area(): number {
        return Math.PI * this.radius*this.radius
    }

}