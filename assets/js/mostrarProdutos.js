import { conectaApi } from "./conectaApi.js";

const listaDeProdutos = document.querySelector('[data-lista-produtos]');

function constroiCardProduto(imagem, titulo, preco) {
    const produto = document.createElement('li');
    produto.innerHTML = `
                    <img src="${imagem}" class="card__img" alt="${titulo}">
                    <h3>${titulo}</h3>
                    <div class="footer__card">
                        <p>$ ${preco}</p>
                        <img src="./assets/img/trash-icon.png" alt="Lixeira">
                    </div>
                    `

    return produto;
}

async function listaProduto() {
    const produtoApi = await conectaApi.listarProdutos();
    produtoApi.forEach(produto => listaDeProdutos.appendChild(
        constroiCardProduto(produto.imagem, produto.titulo, produto.preco)));
}

listaProduto();