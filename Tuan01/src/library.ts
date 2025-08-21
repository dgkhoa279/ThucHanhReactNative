class Book {
    constructor(public title:string,public author:string){}
}
class User {
    constructor(public name:string){}
}


class Library {
    private books:Book[] = []
    private users:User[] = []
    addBook(book:Book):void {
        this.books.push(book)
    }
    addUser(user:User):void {
        this.users.push(user)
    }
    getListBooks():Book[] {
        return this.books
    }
    getListUser():User[]{
        return this.users
    }
}

const lib:Library = new Library()
lib.addBook(new Book("Toan","Khoa"))
lib.addBook(new Book("Li","Huy"))
lib.addUser(new User("VoDangKhoa"))
console.log("Books:", lib.getListBooks());
console.log("Users:", lib.getListUser());