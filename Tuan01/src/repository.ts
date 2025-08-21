class Repository<T> {
    private items:T[] = []
    add(item: T):void {
        this.items.push(item)
    }
    getAll():T[]{
        return this.items
    }

}
const num = new Repository<number>()
num.add(10)
num.add(20)
console.log(num.getAll()) 
const stringRepo = new Repository<string>()

stringRepo.add("Xin chào")
stringRepo.add("TypeScript")
console.log(stringRepo.getAll()) 

