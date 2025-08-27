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

// Promise.all([
//     simulateAsyncTask("Task1",1000),
//     simulateAsyncTask("Task2",8000),
//     simulateAsyncTask("Task3",1500),
// ]).then((results:string[])=>{
//     console.log("All task completed",results);
    
// })

// Bài 7
// Promise.race([
//   simulateAsyncTask("Fast Task", 500),
//   simulateAsyncTask("Slow Task", 2000),
// ]).then((firstResult: string) => {
//   console.log("First task finished:", firstResult);
// });
// Bài 8 
// new Promise<number>((resolve) => {
//   resolve(2);
// })
//   .then((num) => num * num)     // square: 2^2 = 4
//   .then((num) => num * 2)       // double: 4 * 2 = 8
//   .then((num) => num + 5)       // add 5: 8 + 5 = 13
//   .then((result) => console.log("Final result:", result));

// Bài 9
// function filterNumberEven(arr:number[]):Promise<number[]> {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             const numberEven = arr.filter(x=> x%2 ===0)
//             resolve(numberEven)
//         },1000)
//     })
// }
// filterNumberEven([2,5,6,7,8,11,15,17,19]).then(console.log
// )

// Bài 10
// const randomTask = new Promise<string>((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   setTimeout(() => {
//     success ? resolve("Success!") : reject("Failed!");
//   }, 1000);
// });

// randomTask
//   .then((msg) => console.log("Result:", msg))
//   .catch((err) => console.error("Error:", err))
//   .finally(() => console.log("Done"));

// Bài 11
function waitHello(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
}

async function runHello(): Promise<void> {
  const result: string = await waitHello();
  console.log(result); // Output: "Hello Async"
}

runHello();
