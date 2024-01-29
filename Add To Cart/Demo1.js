var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// product code start
let product = [
    {
        "id" : '1',
        "name" : 'Product 1',
        "image" :"img1.jpg",
        "price" : '800',
    },
    {
        "id" : '2',
        "name" : 'Product 2',
        "image" :"img1.jpg",
        "price" : '500',
    },
    {
        "id" : '3',
        "name" : 'Product 3',
        "image" :"img1.jpg",
        "price" : '700',
    },
    // {
    //     "id" : '4',
    //     "name" : 'Product 1',
    //     "image" :"img2.jpg",
    //     "price" : '100',
    // },
    // {
    //     "id" : '5',
    //     "name" : 'Product 1',
    //     "image" :"img2.jpg",
    //     "price" : '100',
    // },
    // {
    //     "id" : '6',
    //     "name" : 'Product 1',
    //     "image" :"img2.jpg",
    //     "price" : '100',
    // },
]; 
let listCards = [];
function initApp (){
    product.forEach((value, key)=>{
        let newDiv = document.createElement("div");
        newDiv.classList.add('item');
        newDiv.innerHTML =`
        <div class="ct">
            <img src="${value.image}">
            <div class="name">${value.name}</div>
            <div id="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
        </div>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key) {
    if(listCards[key] == null) {
        listCards[key] = product[key];
        listCards[key].quantity = 1;

    }
    reloadCard();
}
function reloadCard() {

    listCards.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = parseFloat(totalPrice) + parseFloat(value.price);
        // console.log(totalPrice);
        count = count + value.quantity; 
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

}


