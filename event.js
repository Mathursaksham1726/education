let btn=document.querySelector("#btn");

//  btn.onclick=()=>{
//      console.log("sam");
//  }
//  btn.onclick=function(){
//      console.log("mat")
//  }
//  btn.onclick=()=>{
//     console.log("sam3");
// }
// btn.onclick=()=>{
//     console.log("sam2");
// }

btn.addEventListener("click",()=>{
    console.log("sam")
})
btn.addEventListener("click",()=>{
    console.log("sam1")
})

let j=()=>{
    console.log("sam2")
}
btn.addEventListener("click",j)
btn.addEventListener("click",()=>{
    console.log("sam3")
})

btn.removeEventListener("click",j)

//  let he=()=>{
//     console.log("bad")
//  }

// btn.onclick=he;

// btn.addEventListener('click',()=>{
//     console.log("handler1")
// })
// btn.addEventListener("click",function(){
//     console.log("good")
// })

// function hello(){
//     console.log("hello")
// }

// // btn.addEventListener("click",function bye(){
// //     console.log("byee se u")
// // })

// btn.addEventListener("click",lets=()=>{
//     console.log("s")
// })