class Person {
    constructor(public name:string,public age:number){}
    displayInfo(): void {
        console.log(`Name: ${this.name},Age: ${this.age}`)
    }
}
const p1:Person = new Person("Khoa",21)
p1.displayInfo()

class Student extends Person {
    constructor(name: string,age: number,public grade:string){
        super(name,age)
    }
    displayInfo(): void {
        console.log(`Name: ${this.name},Age: ${this.age},Grade: ${this.grade}`)
    }
}


const student1:Student = new Student("Khoa",21,"DHKTPM18A")
console.log(student1)