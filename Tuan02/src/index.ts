// Bài 1 
// const helloAsync = new Promise((resolve)=> {
//     setTimeout(()=> {
//         resolve("Hello,I'm Vo Dang Khoa")
//     },2000)
// })
// helloAsync.then(console.log)

// Bài 2 
function getNumber(){
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(10)
        },1000)
    })
}
getNumber().then(console.log)