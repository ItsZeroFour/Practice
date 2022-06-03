let fruits = [
    {id: 1, title: 'Apple', price: 20, img: 'https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg'},
    {id: 2, title: 'Orange', price: 30, img: 'https://m.dom-eda.com/uploads/images/catalog/item/dfc9a3e974/3cbf3bd41c_1000.jpg'},
    {id: 3, title: 'Mango', price: 40, img: 'https://imgproxy.sbermarket.ru/imgproxy/size-500-500/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3NwcmVlL3Byb2R1Y3RzLzI2OTM5Mi9vcmlnaW5hbC8yNjgxNjguanBnPzE1ODkzNzMxNTU.jpg'}
]

const toHTML = fruit => `
<div class="col">
<div class="card">
    <img class="card-img-list" style="height: 300px" src="${fruit.img}" alt="${fruit.title}">
        <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a class="btn btn-primary в" href="#" data-btn="price" data-id="${fruit.id}">Узнать цену</a>
            <a class="btn btn-danger" href="#" data-btn="remove" data-id="${fruit.id}">Удалит</a>
        </div>
    </div>
</div>
`

function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
    title: 'Цена на товар',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Закрыть', type: 'primary', handler() {
            priceModal.close()
        }},
    ]
})



document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)
    
    if (btnType == 'price') {

        priceModal.setContent(`
            <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `)
        priceModal.open()

        console.log(fruit);
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Вы уверены?',
            content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id)
            render()
        })
        .catch(() => {
            console.log('Cancle');
        })
    }
})