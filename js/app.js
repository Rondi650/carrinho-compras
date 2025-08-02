
let resultadoGlobal = 0

function adicionar() {
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let produtoSelecionado = document.getElementById('produto').value;
    let apenasValorProduto = parseInt(produtoSelecionado.replace(/\D+/g, ''))
    let apenasTextoProduto = produtoSelecionado.replace(/[-–]? ?R\$?[\d,.]+/gi, "")
    console.log(apenasTextoProduto)

    resultadoGlobal = resultadoGlobal + (quantidade * apenasValorProduto)
    console.log(resultadoGlobal)

    //document.querySelector('.carrinho__produtos').innerHTML = ''

    document.querySelector(".carrinho__produtos").insertAdjacentHTML(
        'beforeend',
        `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${apenasTextoProduto} <span class="texto-azul">R$${quantidade * apenasValorProduto}</span>
    </section>`
    );

    document.querySelector(".carrinho__total").innerHTML = 
    `Total: <span class="texto-azul" id="valor-total">R$${resultadoGlobal}</span>`

}

function limpar() {
    resultadoGlobal = 0
    document.querySelector(".carrinho__produtos").innerHTML = ''
    document.querySelector(".carrinho__total").innerHTML = 
    `Total: <span class="texto-azul" id="valor-total">R$0</span>`
}