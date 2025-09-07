"use strict";
class LivroFisico {
    constructor(titulo, ano, isbn, preco, autor, editora, estoque) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }
    exibirDados() {
        console.log(` Livro Físico `); // 
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Estoque: ${this.estoque}`);
    }
    atualizarEstoque(quantidade) {
        this.estoque = quantidade;
    }
}
class Ebook {
    constructor(titulo, ano, isbn, preco, autor, editora, estoque, tamanhoArquivo) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanhoArquivo = tamanhoArquivo;
    }
    exibirDados() {
        console.log(` Ebook `);
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Tamanho: ${this.tamanhoArquivo} MB`);
    }
    atualizarEstoque(quantidade) {
        this.estoque = quantidade;
    }
}
class Livraria {
    constructor() {
        this.acervo = [];
    }
    adicionarLivro(livro) {
        let livroExiste = false;
        for (let i = 0; i < this.acervo.length; i++) {
            if (this.acervo[i].isbn === livro.isbn) {
                let livroExiste = true;
                break;
            }
        }
        if (!livroExiste) {
            this.acervo.push(livro);
            console.log(`Livro: ${livro.titulo} adicionado.`);
        }
        else {
            console.log(`ERRO. Já existe um livro com mesmo ISBN na livraria!`);
        }
    }
    excluirLivro(isbn) {
        let acervo2 = [];
        let livroExcluido = false;
        for (let i = 0; i < this.acervo.length; i++) {
            if (this.acervo[i].isbn !== isbn) {
                acervo2.push(this.acervo[i]);
            }
            else {
                livroExcluido = true;
            }
        }
        if (livroExcluido) {
            this.acervo = acervo2;
            console.log(`Livro com ISBN ${isbn} excluído.`);
        }
        else {
            console.log(`Erro: Livro com ISBN ${isbn} não encontrado.`);
        }
    }
    venderLivro(isbn, quantidade) {
        let ind = -1;
        for (let i = 0; i < this.acervo.length; i++) {
            if (this.acervo[i].isbn === isbn) {
                ind = i;
                break;
            }
        }
        if (ind !== -1) {
            let livro = this.acervo[ind];
            if (livro.estoque >= quantidade) {
                livro.atualizarEstoque(livro.estoque - quantidade);
                console.log(`Venda de ${quantidade} unidade(s) de "${livro.titulo}" realizada. Novo estoque: ${livro.estoque}.`);
            }
            else {
                console.log(`Erro: Estoque insuficiente para "${livro.titulo}". Apenas ${livro.estoque} unidades disponíveis.`);
            }
        }
        else {
            console.log(`Erro: Livro com ISBN ${isbn} não encontrado.`);
        }
    }
    listarAcervo() {
        console.log(`\nAcervo Completo da Livraria`);
        if (this.acervo.length === 0) {
            console.log(`O acervo está vazio.`);
            return;
        }
        for (let i = 0; i < this.acervo.length; i++) {
            this.acervo[i].exibirDados();
        }
    }
}
let minhaLivraria = new Livraria();
let livroFisico1 = new LivroFisico("O Senhor dos Anéis", 1954, "978-0618640157", 79.90, "J.R.R. Tolkien", "HarperCollins", 50);
let livroFisico2 = new LivroFisico("O Hobbit", 1937, "978-0345339683", 45.50, "J.R.R. Tolkien", "Del Rey", 30);
let ebook1 = new Ebook("Neuromancer", 1984, "978-0441013589", 29.99, "William Gibson", "Ace Books", 100, 2.5);
minhaLivraria.adicionarLivro(livroFisico1);
minhaLivraria.adicionarLivro(livroFisico2);
minhaLivraria.adicionarLivro(ebook1);
let livroRepetido = new LivroFisico("Teste", 2025, "978-0618640157", 10, "Autor", "Editora", 5);
minhaLivraria.adicionarLivro(livroRepetido);
console.log("\n========================================\n");
minhaLivraria.listarAcervo();
console.log("Realizando vendas...");
minhaLivraria.venderLivro("978-0618640157", 5);
minhaLivraria.venderLivro("978-0441013589", 10);
minhaLivraria.venderLivro("999-9999999999", 1);
console.log("\n========================================\n");
minhaLivraria.listarAcervo();
console.log("\n========================================\n");
console.log("Excluindo um livro...");
minhaLivraria.excluirLivro("978-0345339683");
console.log("\n========================================\n");
minhaLivraria.listarAcervo();
