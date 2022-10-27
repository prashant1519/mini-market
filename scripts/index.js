// Store cart items in local storage with key: "items"

async function items(){
    try{
        const res=await fetch("https://zaraclone-json-data.herokuapp.com/products?_limit=30")

    
        const data=await res.json();
        // console.log(res)
        append(data)
    }
   catch(err){
    console.log(err)
   }
}

items()


// let url = "https://zaraclone-json-data.herokuapp.com/products";

// fetch(url)
// .then(res => res.json())
// .then(out =>append(out))
// .catch(err => { throw err });
let cart=[]
function append(data){
  console.log(data)
data.map(function(ele){
    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=ele.imgUrl

    let nam=document.createElement("p")
    nam.innerText=ele.prod_name

    let pr=document.createElement("p")
    pr.innerText=ele.price

    let cr=document.createElement("button")
    cr.innerText="Add to cart"
    cr.addEventListener("click",function(){
     cart.push(ele)
        localStorage.setItem("cart",JSON.stringify(cart))
    })

    div.append(image,nam,pr,cr)

    document.querySelector("#con").append(div)


})


}