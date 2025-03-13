let compraAberta = document.querySelector('.shopping');
let fecharCompra = document.querySelector('.fecharCompra');
let lista = document.querySelector('.lista');
let listaCarrinho = document.querySelector('.listaCarrinho');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantidade = document.querySelector('.quantidade');

compraAberta.addEventListener('click', ()=>{
    body.classList.add('active');
})
fecharCompra.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let produto = [
    {
        id: 1,
        nome: 'T-Shirt Feminina',
        imagem: '1.jpg',
        preco: 35
    },
    {
        id: 2,
        nome: 'T-Shirt Feminina',
        imagem: '2.png',
        preco: 35
    },
    {
        id: 3,
        nome: 'T-Shirt Feminina',
        imagem: '3.png',
        preco: 35
    },
    {
        id: 4,
        nome: 'T-Shirt Feminina',
        imagem: '4.png',
        preco: 35
    },
    {
        id: 5,
        nome: 'T-Shirt Feminina',
        imagem: '5.png',
        preco: 35
    },
    {
        id: 6,
        nome: 'T-Shirt Feminina',
        imagem: '6.png',
        preco: 35
    },
    {
        id: 7,
        nome: 'T-Shirt Feminina',
        imagem: '7.png',
        preco: 35
    },
    {
        id: 8,
        nome: 'T-Shirt Feminina',
        imagem: '8.png',
        preco: 35
    },
    {
        id: 9,
        nome: 'T-Shirt Feminina',
        imagem: '9.png',
        preco: 35
    },
    {
        id: 10,
        nome: 'T-Shirt Feminina',
        imagem: '10.png',
        preco: 35
    },
    {
        id: 11,
        nome: 'T-Shirt Feminina',
        imagem: '11.png',
        preco: 35
    }, 
    {
        id: 12,
        nome: 'T-Shirt Feminina',
        imagem: '12.png',
        preco: 35
    },
    {
        id: 13,
        nome: 'T-Shirt Feminina',
        imagem: '13.png',
        preco: 35
    },
    {
        id: 14,
        nome: 'T-Shirt Feminina',
        imagem: '14.png',
        preco: 35
    },
    {
        id: 15,
        nome: 'T-Shirt Feminina',
        imagem: '15.png',
        preco: 35
    },
    {
        id: 16,
        nome: 'T-Shirt Feminina',
        imagem: '16.png',
        preco: 35
    },
    {
        id: 17,
        nome: 'T-Shirt Feminina',
        imagem: '17.png',
        preco: 35
    },
    {
        id: 18,
        nome: 'T-Shirt Feminina',
        imagem: '18.png',
        preco: 35
    }
];
let listaCarrinhos  = [];
function initApp(){
    produto.forEach((valor, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="imagem/${valor.imagem}">
            <div class="titulo">${valor.nome}</div>
            <div class="preco">R$ ${valor.preco.toLocaleString()},00</div>
            <button onclick="addCarrinho(${key})">Adicionar ao Carrinho</button>`
        lista.appendChild(newDiv);
    })
}
initApp();
function addCarrinho(key){
    if(listaCarrinhos[key] == null){
        listaCarrinhos[key] = JSON.parse(JSON.stringify(produto[key]));
        listaCarrinhos[key].quantidade = 1;
    }
    recarregarCarrinho();
}
function recarregarCarrinho(){
    listaCarrinho.innerHTML = '';
    let contar = 0;
    let totalPreco = 0;
    listaCarrinhos.forEach((valor, key)=>{
        totalPreco = totalPreco + valor.preco;
        contar = contar + valor.quantidade;
        if(valor != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="imagem/${valor.imagem}"/></div>
                <div>${valor.nome}</div>
                <div>R$: ${valor.preco.toLocaleString()}</div>
                <div>
                    <button onclick="alterarQuantidade(${key}, ${valor.quantidade - 1})">-</button>
                    <div class="contar">${valor.quantidade}</div>
                    <button onclick="alterarQuantidade(${key}, ${valor.quantidade + 1})">+</button>
                </div>`;
                listaCarrinho.appendChild(newDiv);
        }
    })
    total.innerText = 'R$ ' +totalPreco.toLocaleString();
    quantidade.innerText = contar;
}
function alterarQuantidade(key, quantidade){
    if(quantidade == 0){
        delete listaCarrinhos[key];
    }else{
        listaCarrinhos[key].quantidade = quantidade;
        listaCarrinhos[key].preco = quantidade * produto[key].preco;
    }
    recarregarCarrinho();
}