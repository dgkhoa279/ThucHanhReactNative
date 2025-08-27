// Bài 1 
// const helloAsync = new Promise((resolve)=> {
//     setTimeout(()=> {
//         resolve("Hello,I'm Vo Dang Khoa")
//     },2000)
// })
// helloAsync.then(console.log)

// Bài 2 
// function getNumber(){
//     return new Promise((resolve)=> {
//         setTimeout(()=> {
//             resolve(10)
//         },1000)
//     })
// }
// getNumber().then(console.log)

// Bài 3
// function throwError(){
//     return new Promise((_,reject)=> {
//         setTimeout(()=>{
//             reject(new Error("Some thing went wrong"))
//         },1000)
//     })
// }
// throwError().catch((err)=> console.log(err.message))

// Bài 4
// function randomNumber(){
//     return new Promise((resolve,reject)=>{
//         const num = Math.random()
//         if(num >= 0){
//             resolve(num)
//         }else{
//             reject("Failed")
//         }
//     })
// }
// randomNumber().then(console.log)
// Bài 5 

// function simulateTask(time: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task done");
//     }, time);
//   });
// }

// simulateTask(1500).then((msg: string) => console.log(msg));
// Bài 6 
function simulateAsyncTask(taskName:string,time:number):Promise<string> {
    return new Promise((resolve) => {
        setTimeout(()=> resolve(`${taskName} done`),time)
    })
}

Promise.all([
    simulateAsyncTask("Task1",1000),
    simulateAsyncTask("Task2",8000),
    simulateAsyncTask("Task3",1500),
]).then((results:string[])=>{
    console.log("All task completed",results);
    
})