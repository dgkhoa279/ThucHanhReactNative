class Employee {
    constructor(public name:string){}
}
class Manager extends Employee{
    manage():void {
        console.log(`${this.name} is manager`);
        
    }
}
class Developer extends Employee{
    dev(): void {
        console.log(`${this.name} is dev`);
        
    }
}