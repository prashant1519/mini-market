var rec=JSON.parse(localStorage.getItem("cart"))
// le.log(rec)conso

var rig=document.getElementById("right")
rig.innerText=rec.length

rec.map(function(ele,index){
  
    var div =document.createElement("div")

    
    let image=document.createElement("img")
    image.src=ele.imgUrl

    let nam=document.createElement("p")
    nam.innerText=ele.prod_name

    let pr=document.createElement("p")
    pr.innerText=ele.price

    let ad=document.createElement("button")
    ad.innerText="REMOVE"
    ad.addEventListener("click",function(){
        // console.log("ioo");
        rec.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(rec))
        window.location.reload()
    })

    

    
    div.append(image,nam,pr,ad)

    document.querySelector("#cart").append(div)



})

var total=rec.reduce(function(sum,ele){

    return sum+ele.price
},0)
document.getElementById("total").innerText=total
