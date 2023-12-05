const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies(){
// Progression 2: using setTimeout() -- use 1000 units for time parameter
setTimeout(()=>{
  cookies.forEach((cookie)=>{
    let cookiename=cookie.name;
    let listTage=document.createElement("li");
    listTage.innerText=cookiename;
    document.body.append(listTage)


  })
},1000)

}


//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookies(){
  // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
  let promiseObj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // Progression 5: handling errors and adding new cookie to the list
       cookies.push(newCookie);

       let error=false;
       if (!error){
         resolve("resolved");
       }else{
         reject("rejected");
       }

    },2000)
  })
  return promiseObj;
}

// Progression 7: creating a new async function
async function asyncAwait(){
   try{
      let res= await createCookies();
      getCookies()
   }catch(error){
      console.log(err);

   }
}

// calling the new async function
asyncAwait()
