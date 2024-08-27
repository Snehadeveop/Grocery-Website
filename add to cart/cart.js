let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [

  {
    id: 24,
    name: 'Dosa Batter',
    img: 'dosa.jpg',
    price: 14
},


    {
        id: 1,
        name: 'Bingo',
        img: '1.JPG',
        price: 4
    },

    {
      id: 20,
      name: 'Garam Masala',
      img: 'garam.webp',
      price: 3  
    },

    {
      id: 22,
      name: 'Basmati Rice',
      img: 'basmati.webp',
      price: 14
  },

  {
    id: 23,
    name: 'Chicken Masala Powder',
    img: 'chicken.webp',
    price: 4
},



  {
    id: 22,
    name: 'Chana Masala Powder',
    img: 'chole.jpg',
    price: 14
},

    {
      id: 21,
      name: 'Chillie Powder',
      img: 'chilli.webp',
      price: 4
  },

    {
      id: 19,
      name: 'Dahi Yogurt',
      img: 'dahi.webp',
      price: 4
    },

  {
    id: 20,
    name: 'Flour',
    img: 'flour.webp',
    price: 10
  },



    {
        id: 2,
        name: 'Puffcorn',
        img: '2.JPG',
        price: 6
    },
    {
        id: 3,
        name: 'Jumpys',
        img: '3.JPG',
        price: 5
    },
    {
        id: 4,
        name: 'Paneer Masala Powder',
        img: 'pan.webp',
        price: 4
    },
    {
        id: 5,
        name: 'Pani Puri Kit',
        img: 'panipuri.png',
        price: 6
    },
    {
        id: 6,
        name: 'daal',
        img: 'daal.jpg',
        price: 3
    },

    {
      id: 7,
      name: 'Turmeric',
      img: 'turmeric.jpg',
      price: 3
    },

    {
      id: 8,
      name: 'Spiral Crunch',
      img: 'chakli.jpg',
      price: 2.5
    },

    {
      id: 9,
      name: 'Tasty nuts',
      img: '11.jpg',
      price: 2
    },

    {
      id: 10,
      name: 'Ring Puffs',
      img: '12.jpg',
      price: 3
    },

    {
      id: 11,
      name: 'Cheetos',
      img: 'cheet.jpg',
      price: 3.9
    },

    {
      id: 12,
      name: 'Kurkure Masala Munch',
      img: '14.jpg',
      price: 3
    },

    {
      id: 13,
      name: 'Cardmom',
      img: '15.jpg',
      price: 2
    },

    {
      id: 14,
      name: 'Lays Indian Magic Masala',
      img: 'lays.webp',
      price: 3
    },

    {
      id: 15,
      name: 'Marie Gold',
      img: 'marie.jpg',
      price: 3
    },

    {
      id: 16,
      name: 'Little Hearts',
      img: 'lil.webp',
      price: 3
    },

    {
      id: 17,
      name: 'Turmeric',
      img: '24.jpg',
      price: 3
    },

    {
      id: 18,
      name: 'Turmeric',
      img: '25.jpg',
      price: 3
    },

    {
      id: 24,
      name: 'Chivda',
      img: 'chiv.webp',
      price: 3
    },


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../img/${value.img}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../img/${value.img}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}