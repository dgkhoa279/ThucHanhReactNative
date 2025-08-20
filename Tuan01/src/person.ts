class Person {
    constructor(public name:string,public age:number){}
    displayInfo(): void {
        console.log(`Name: ${this.name},Age: ${this.age}`)
    }
}
const p1:Person = new Person("Khoa",21)
p1.displayInfo()