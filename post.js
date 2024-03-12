
async function Postdata(){
    let options={
        method: 'POST',
        body: JSON.stringify({
          title: 'sam',
          body: 'mat',
          userId: 300,
          
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
    }
      let p1=await fetch('https://jsonplaceholder.typicode.com/posts', options)
  // let p1= await fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
   let d=await p1.json();
   return d;
}

async function Getdata(){
    let p= await fetch('https://jsonplaceholder.typicode.com/posts/');
    let res=await p.json();
    return res;
}

 async function Mainfunc(){
    let S= await Postdata();
    console.log(S);
   let r=  await Getdata();
   console.log(r)
}

Mainfunc();