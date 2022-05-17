const fruits = [
    {id: 1, title: 'Apples', price: 20, img: 'https://bellavitashop.co.uk/6288-large_default/red-apples-500g.jpg000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Oranges', price: 30, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg'},
    {id: 3, title: 'Mango', price: 40, img: 'https://lt.awtpostharvest.com/Content/upload/other/201709281703275321204.jpg'},
  ]

//   1. show price in modal (1 modal)
//   2. generate cards in DOM 
//   3. delete modal, with options: ok, cancel
//   -------------------

function createCard (products) {
  console.log('counter');
   // console.log(row);
products.forEach((element, index) => {   let card = document.createElement('div')
document.createElement('div')
card.classList.add('col')
card.insertAdjacentHTML("afterbegin",
`<div class="card" style="width: 300px">
  <img class="card-img-top" style="height: 300px;"  src="${element.img}">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <a class="btn btn-primary" show-price>Show price</a>
    <a class="btn btn-danger" show-remove>Remove</a>
  </div>
</div>`
)

const modalShowPrice = $.modal({
    title: element.title,
    closable: true,
    content: `
   <h3>Price: ${element.price} Eu</h3>
    `,
    width: '600px',
    footerButton: [
        {
            text: 'Ok', type: 'primary', handler() {
                modalShowPrice.close();
            }
        },
    ]
})

const modalRemove = $.modal({
    title: element.title,
    closable: true,
    content: `
   <h3>Price: ${element.price} Eu</h3>
    `,
    width: '600px',
    footerButton: [
        {
            text: 'Remove', type: 'primary', handler() {
                modalRemove.close()
                products.splice(index, 1)
                console.log(products);
                cont.innerHTML = ''
                createCard(products);
            }
        },
        {
            text: 'Cancel', type: 'danger', handler() {
                modalRemove.close();
        }
    }
    ]
})


card.querySelector('[show-price]').addEventListener('click', modalShowPrice.open  )
//document.querySelector('main').appendChild(card)


card.querySelector('[show-remove]').addEventListener('click', modalRemove.open  )
//document.querySelector('main').appendChild(card)

const cont = document.getElementById('cards_container')
cont.appendChild(card);
})

}

createCard(fruits);



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
