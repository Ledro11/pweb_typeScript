var LivroFisico = /** @class */ (function () {
    function LivroFisico(titulo, ano, isbn, preco, autor, editora, estoque) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }
    LivroFisico.prototype.exibirDados = function () {
        console.log(" Livro F\u00EDsico "); // 
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Autor: ".concat(this.autor));
        console.log("Pre\u00E7o: R$ ".concat(this.preco));
        console.log("Estoque: ".concat(this.estoque));
    };
    LivroFisico.prototype.atualizarEstoque = function (quantidade) {
        this.estoque = quantidade;
    };
    return LivroFisico;
}());
var Ebook = /** @class */ (function () {
    function Ebook(titulo, ano, isbn, preco, autor, editora, estoque, tamanhoArquivo) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanhoArquivo = tamanhoArquivo;
    }
    Ebook.prototype.exibirDados = function () {
        console.log(" Ebook ");
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Autor: ".concat(this.autor));
        console.log("Pre\u00E7o: R$ ".concat(this.preco));
        console.log("Estoque: ".concat(this.estoque));
        console.log("Tamanho: ".concat(this.tamanhoArquivo, " MB"));
    };
    Ebook.prototype.atualizarEstoque = function (quantidade) {
        this.estoque = quantidade;
    };
    return Ebook;
}());
var Livraria = /** @class */ (function () {
    function Livraria() {
        this.acervo = [];
    }
    Livraria.prototype.adicionarLivro = function (livro) {
        var livroExiste = false;
        for (var i = 0; i < this.acervo.length; i++) {
            if (this.acervo[i].isbn === livro.isbn) {
                var livroExiste_1 = true;
                break;
            }
        }
        if (!livroExiste) {
            this.acervo.push(livro);
            console.log("Livro: ".concat(livro.titulo, " adicionado."));
        }
        else {
            console.log("ERRO. J\u00E1 existe um livro com mesmo ISBN na livraria!");
        }
    };
    Livraria.prototype.excluirLivro = function (isbn) {
        var acervo2 = [];
        var livroExcluido = false;
        for (var i = 0; i < this.acervo.length; i++) {
            if (this.acervo[i].isbn !== isbn) {
                acervo2.push(this.acervo[i]);
            }
            else {
                livroExcluido = true;
            }
        }
        if (livroExcluido) {
            this.acervo = acervo2;
            console.log("Livro com ISBN ".concat(isbn, " exclu\u00EDdo."));
        }
        else {
            console.log("Erro: Livro com ISBN ".concat(isbn, " n\u00E3o encontrado."));
        }
    };
    Livraria.prototype.venderLivro = function (isbn, quantidade) {
        var ind = -1;
        for (var i = 0; i < this.acervo.length; i++) {
            if (this.acervo[i].isbn === isbn) {
                ind = i;
                break;
            }
        }
        if (ind !== -1) {
            var livro = this.acervo[ind];
            if (livro.estoque >= quantidade) {
                livro.atualizarEstoque(livro.estoque - quantidade);
                console.log("Venda de ".concat(quantidade, " unidade(s) de \"").concat(livro.titulo, "\" realizada. Novo estoque: ").concat(livro.estoque, "."));
            }
            else {
                console.log("Erro: Estoque insuficiente para \"".concat(livro.titulo, "\". Apenas ").concat(livro.estoque, " unidades dispon\u00EDveis."));
            }
        }
        else {
            console.log("Erro: Livro com ISBN ".concat(isbn, " n\u00E3o encontrado."));
        }
    };
    Livraria.prototype.listarAcervo = function () {
        console.log("\nAcervo Completo da Livraria");
        if (this.acervo.length === 0) {
            console.log("O acervo est\u00E1 vazio.");
            return;
        }
        for (var i = 0; i < this.acervo.length; i++) {
            this.acervo[i].exibirDados();
        }
    };
    return Livraria;
}());
var minhaLivraria = new Livraria();
var livroFisico1 = new LivroFisico("O Senhor dos Anéis", 1954, "978-0618640157", 79.90, "J.R.R. Tolkien", "HarperCollins", 50);
var livroFisico2 = new LivroFisico("O Hobbit", 1937, "978-0345339683", 45.50, "J.R.R. Tolkien", "Del Rey", 30);
var ebook1 = new Ebook("Neuromancer", 1984, "978-0441013589", 29.99, "William Gibson", "Ace Books", 100, 2.5);
minhaLivraria.adicionarLivro(livroFisico1);
minhaLivraria.adicionarLivro(livroFisico2);
minhaLivraria.adicionarLivro(ebook1);
var livroRepetido = new LivroFisico("Teste", 2025, "978-0618640157", 10, "Autor", "Editora", 5);
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
