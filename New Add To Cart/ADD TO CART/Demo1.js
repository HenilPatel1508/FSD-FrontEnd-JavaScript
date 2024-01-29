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
        "name" : 'Chocolate Cake',
        "image" :"img/img1.jpg",
        "price" : '800',
    },
    {
        "id" : '2',
        "name" : 'Cup Cake',
        "image" :"img/img2.jpg",
        "price" : '500',
    },
    {
        "id" : '3',
        "name" : 'Cheese Chocolate Cake',
        "image" :"img/img3.jpg",
        "price" : '700',
    },
    {
        "id" : '4',
        "name" : 'Strawberry cheese cake',
        "image" :"img/img4.jpg",
        "price" : '600',
    },

]; 
let listCards = [];
function initApp (){
    product.forEach((value, key)=>{
        let newDiv = document.createElement("div");
        newDiv.classList.add('item');
        newDiv.innerHTML =`
        <div class="container ct">
            <div><img src="${value.image}"></div>
            <div class="name">${value.name}</div>
            <div id="price">₹ ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key}) " class="add">Add To Cart</button>
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
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    for (let key in listCards) {
        let value = listCards[key];

        if (value && value.name) {
          
            let updatedPrice = value.quantity * product[key].price;

            totalPrice += updatedPrice;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.name}</div>
                <div>₹ ${updatedPrice.toLocaleString()}</div>
                
                <div>
                    <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
                </div>
            `;

            listCard.appendChild(newDiv);
        }
    }

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity <= 0) {
        delete listCards[key];
    } else {
        if (listCards[key] && product[key]) {
            listCards[key].quantity = quantity;
        }
    }
    reloadCard();
    console.log(listCards);
}

