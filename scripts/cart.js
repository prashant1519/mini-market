var rec=JSON.parse(localStorage.getItem("cart"))
// le.log(rec)conso

var rig=document.getElementById("right")
rig.innerText=rec.length

rec.map(function(ele){
  
    var div =document.createElement("div")

    
    let image=document.createElement("img")
    image.src=ele.imgUrl

    let nam=document.createElement("p")
    nam.innerText=ele.prod_name

    let pr=document.createElement("p")
    pr.innerText=ele.price

    
    div.append(image,nam,pr)

    document.querySelector("#cart").append(div)



})

var total=rec.reduce(function(sum,ele){

    return sum+ele.price
},0)
document.getElementById("total").innerText=total
