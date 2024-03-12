
// console.log("1");
// console.log('2');
// function Getdata1(getNextData){
//    // console.log("getting data")
//     setTimeout(()=>{
       
//         console.log("getting first data");
//        // getNextData()
        
//     },4000)

// }
// Getdata1()

// console.log("3");
// console.log("4")

//  function Getdata2(getNextData2){
//      setTimeout(()=>{
//          console.log("getting second data");
//          getNextData2()
//      },4000)
//  }
//  function Getdata3(){
//     setTimeout(()=>{
//         console.log("getting third data");
        
//     },4000)
// }

// Getdata1(()=>{
//     Getdata2(Getdata3)
// })



// // Getdata1(1,()=>{
// //     Getdata1(2,()=>{
// //         Getdata1(3)
// //     })
// // });
// // Getdata1(2);
// // Getdata2();

//promise cahinning

// function getData(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             console.log("data1");
//             resolve("sucess")
//          },4000)
//     })
// }
// function getData2(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             console.log("data2");
//             resolve("sucess")
//          },4000)
//     })
// }
// getData().then((res)=>{
//     console.log("done data1")
//     getData2().then((res)=>{
//         console.log("done data2")
// });


// });



//  function Getdata(dataId){
//      return new Promise((resolve,reject)=>{
//              console.log("getting data")
//           setTimeout((res,err)=>{
//              console.log("data",dataId);
//             //  resolve("sucess");
//             reject("error")
            
//           },4000)
//      })
//  }


// Getdata(1).then((res)=>{
//     console.log("getsucessful data");
    
//    return  Getdata(2)
// }).then((res)=>{
//     console.log("getsucessful data")
//     return Getdata(3)
//     }).then((res)=>{
//         console.log("getsucessful data")
//         })


//async -await
//  async function Hello(){
//     console.log("hello")
   
// }

// async function Data(){
//     // await Getdata(1);
//     // await Getdata(2);
//     // await Getdata(3);
//     try{
//       await Getdata(1);
//       await Getdata(2);
//     }catch(error){
//       console.error("error come",error)
//     }
// }

// Data();
//fetch api.....\
// async function hello(){
// const response =  await fetch('https://cat-fact.herokuapp.com/facts');
// // console.log(url)
// const obj= await response.json()
// console.log(obj)
// //
// }

// hello();


// const url='https://cat-fact.herokuapp.com/facts';
// let elem=document.querySelector("#fact")
// async function Getd(){
//     let response= await fetch(url);
//     const obj= await response.json()
//     console.log(obj);
//     console.log(JSON.stringify(obj));
//     //console.log(JSON.parse(JSON.stringify(obj)));
//     elem.innerText=obj[4].text;
// }


// Getd()

const url='https://cat-fact.herokuapp.com/facts';
// fetch(url).then((res)=>{
//     return fetch(url).json()
// }).then(
//     console.log()
// )

// let p1=  fetch(url);
// p1.then( (res)=>{
//     let p2= res.json();
//     p2.then((res)=>{
//         console.log(res)
//     })
// })

fetch(url).then((response)=>{
     return response.json();
}).then((data)=>{
     console.log(data)
})

// gtd();