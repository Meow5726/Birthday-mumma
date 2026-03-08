let pages=document.querySelectorAll(".page")
let nextBtns=document.querySelectorAll(".next")
let music=document.getElementById("bgMusic")
let index=0
document.body.addEventListener("click",()=>{
music.play()
},{once:true})
nextBtns.forEach(btn=>{
btn.onclick=()=>{
pages[index].classList.remove("active")
index++
if(index<pages.length){
pages[index].classList.add("active")
}
}
})
let cutBtn=document.getElementById("cutCake")
let cakeImg=document.getElementById("cakeImg")
let cakeNext=document.getElementById("cakeNext")
cutBtn.onclick=()=>{
cakeImg.src="images/cake2.jpg"
cutBtn.innerText="Cake Cut 🎉"
cakeNext.style.display="inline-block"
}
let giftBtn=document.getElementById("openGift")
let giftArea=document.getElementById("giftArea")
let giftNext=document.getElementById("giftNext")
let gifts=[
"images/icecream.webp",
"images/teddy.jpg",
"images/cake.png",
"images/chocalates.jpg",
"images/flowers.jpg"
]
let texts=[
"Open Your Gift",
"Open Your 2nd Gift",
"Open Your 3rd Gift",
"Open Your Next Gift",
"Open Your Last Gift"
]
let g=0
giftBtn.onclick=()=>{
if(g<gifts.length){
let img=document.createElement("img")
img.src=gifts[g]
giftArea.innerHTML=""
giftArea.appendChild(img)
g++
if(g<gifts.length){
giftBtn.innerText=texts[g]
}
if(g===gifts.length){
giftBtn.style.display="none"
giftNext.style.display="inline-block"
}}}
