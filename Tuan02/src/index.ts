// Bài 1 
const helloAsync = new Promise((resolve)=> {
    setTimeout(()=> {
        resolve("Hello,I'm Vo Dang Khoa")
    },2000)
})
helloAsync.then(console.log)