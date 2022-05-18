let fruits = [
    {id: 1, title: 'Apples', price: 20, img: 'https://bellavitashop.co.uk/6288-large_default/red-apples-500g.jpg000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Oranges', price: 30, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg'},
    {id: 3, title: 'Mango', price: 40, img: 'https://lt.awtpostharvest.com/Content/upload/other/201709281703275321204.jpg'},
  ]


const toHTML = fruit => 
    `<div class="col">
        <div class="card">
            <img class="card-img-top" style="height: 300px;"  src="${fruit.img}" alt=${fruit.title}>
            <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <a class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Show price</a>
                <a class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Remove</a>
            </div>
        </div>
    </div>`


function render() {
    const html = fruits.map(fruit => toHTML(fruit)).join('');
    document.querySelector('#fruits').innerHTML = html
}

render();

const priceModal = $.modal({
    title: 'Goods price',
    closable: true,
    content: ``,
    width: '400px',
    footerButton: [
        { text: 'Close', type: 'primary', handler() {
                priceModal.close()
            }}
    ]
})

document.addEventListener('click', event => {
const btnType = event.target.dataset.btn;
const id= +event.target.dataset.id;
const fruit = fruits.find(f => f.id === id);
if (btnType === 'price') {
    priceModal.setContent(
        `<p>Price for ${fruit.title}: <strong>${fruit.price}$</strong></p>`
    )
   priceModal.open()

} else if (btnType === 'remove') {
 
  $.confirm({
       title: 'Confirm delete?',
       content: `<p>You will remove frui: <strong>hmmm</strong></p>`
   }).then(()=>{
       fruits = fruits.filter(f => f.id !== id)
       render()
   }).catch(()=> {
       console.log("cancel");
   })
}
})


// function render (products) {
//   console.log('counter');
//    // console.log(row);
// products.forEach((element, index) => {   let card = document.createElement('div')
// document.createElement('div')
// card.classList.add('col')
// card.insertAdjacentHTML("afterbegin",
// `<div class="card" style="width: 300px">
//   <img class="card-img-top" style="height: 300px;"  src="${element.img}">
//   <div class="card-body">
//     <h5 class="card-title">${element.title}</h5>
//     <a class="btn btn-primary" show-price>Show price</a>
//     <a class="btn btn-danger" show-remove>Remove</a>
//   </div>
// </div>`
// )

// const modalShowPrice = $.modal({
//     title: element.title,
//     closable: true,
//     content: `
//    <h3>Price: ${element.price} Eu</h3>
//     `,
//     width: '600px',
//     footerButton: [
//         {
//             text: 'Ok', type: 'primary', handler() {
//                 modalShowPrice.close();
//             }
//         },
//     ]
// })

// const modalRemove = $.modal({
//     title: element.title,
//     closable: true,
//     content: `
//    <h3>Price: ${element.price} Eu</h3>
//     `,
//     width: '600px',
//     footerButton: [
//         {
//             text: 'Remove', type: 'primary', handler() {
//                 modalRemove.close()
//                 products.splice(index, 1)
//                 console.log(products);
//                 cont.innerHTML = ''
//                 createCard(products);
//             }
//         },
//         {
//             text: 'Cancel', type: 'danger', handler() {
//                 modalRemove.close();
//         }
//     }
//     ]
// })


// card.querySelector('[show-price]').addEventListener('click', modalShowPrice.open  )
// //document.querySelector('main').appendChild(card)


// card.querySelector('[show-remove]').addEventListener('click', modalRemove.open  )
// //document.querySelector('main').appendChild(card)

// const cont = document.getElementById('fruits')
// cont.appendChild(card);
// })

// }

// render(fruits);



// const modal = $.modal({
//     title: 'Modal',
//     closable: true,
//     content: `
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ratione?</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ratione?</p>
//     `,
//     width: '600px',
//     footerButton: [
//         {
//             text: 'Ok', type: 'primary', handler() {
//                 console.log('Primary btn clicked');
//             }
//         },
//         {
//             text: 'Cancel', type: 'danger', handler() {
//                 console.log('danger btn clicked');
//             }
//         }
//     ]
// })
