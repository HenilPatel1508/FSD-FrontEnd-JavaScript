const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector(".body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active")
})
// closeshopping.addEventListener("click", () => {
//     body.classList.remove("active")
// })


let prodcuts = [
    {
        id:1,
        name:"Being Human",
        image:"img6.jpg",
        price:2200
    },
    {
        id:2,
        name:"Puma T-shirt",
        image:"img7.jpg",
        price:2000
    },
    {
        id:3,
        name:"Polo Neck T-shirt",
        image:"img6.jpg",
        price:1200
    }
    
]

let listCards = [];

const initApp =()=>{
    prodcuts.forEach((value,key)=>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src="${value.image}">
        <div class = "title">${value.name}</div>
        <div class = "price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})"Add To Card</button>
        `
        list.appendChild(newDiv)
    })
}

initApp()