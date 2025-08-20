class User {
    private userName:string
    constructor(name:string){
        this.userName = name
    }
    get name():string{
        return this.userName
    }
    set name(value:string){
        this.userName = value
    }
}
const user8 = new User("Khoa")
console.log(user8.name)
user8.name = "Huy"
console.log(user8)