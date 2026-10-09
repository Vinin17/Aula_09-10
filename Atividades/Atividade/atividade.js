console.log("===== PARTE 1: DECLARAÇÃO E MODIFICAÇÃO BÁSICA =====");

// Questão 1.1
const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];
console.log("1.1 - Categorias:", categorias);

// Questão 1.2
const codigosProdutos = [101, 102, 103, 104];
const fornecedores = new Array(
    'TechSupply',
    'ModaExpress',
    'SuperFoods'
);

console.log("1.2 - Códigos dos produtos:", codigosProdutos);
console.log("1.2 - Fornecedores:", fornecedores);

// Questão 1.3
console.log("1.3 - Primeira categoria:", categorias[0]);

categorias[1] = 'Calçados';
console.log("1.3 - Categorias atualizadas:", categorias);


console.log("\n===== PARTE 2: INSERÇÃO, REMOÇÃO E PESQUISA =====");

// Questão 2.1
categorias.push('Livros');
console.log("Após adicionar Livros:", categorias);

categorias.pop();
console.log("Após remover o último elemento:", categorias);

categorias.unshift('Brinquedos');
console.log("Após adicionar Brinquedos no início:", categorias);

categorias.shift();
console.log("Após remover o primeiro elemento:", categorias);

// Questão 2.2
console.log("2.2 - Tamanho do array:", categorias.length);

// Questão 2.3
console.log("2.3 - Índice de Calçados:", categorias.indexOf('Calçados'));

console.log(
    "2.3 - Existe Eletrônicos?",
    categorias.includes('Eletrônicos')
);


console.log("\n===== PARTE 3: ITERAÇÃO =====");

// Questão 3.1
console.log("3.1 - Laço for tradicional:");

for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
}

// Questão 3.2
console.log("3.2 - Laço for...of:");

for (const categoria of categorias) {
    console.log(categoria);
}


console.log("\n===== PARTE 4: ARRAYS DE OBJETOS E MÉTODOS AVANÇADOS =====");

const produtos = [
    { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
    { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
    { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

// Questão 4.1 - Acesso a objetos
console.log("4.1 - Primeiro produto:", produtos[0].nome);


// Questão 4.2 - filter

const produtosBaratos = produtos.filter(
    produto => produto.preco < 300.00
);

console.log("4.2 - Produtos com preço menor que R$ 300:", produtosBaratos);

const precos = [50, 150, 200, 350, 400];

const multiplosDe100 = precos.filter(
    preco => preco % 100 === 0
);

console.log("4.2 - Preços múltiplos de 100:", multiplosDe100);


// Questão 4.3 - reduce

const quantidades = [2, 3, 5, 10];

const totalItens = quantidades.reduce(
    (acumulador, quantidade) => acumulador + quantidade,
    0
);

console.log("4.3 - Total de itens:", totalItens);

const valorTotalEstoque = produtos.reduce(
    (acumulador, produto) =>
        acumulador + produto.preco * produto.estoque,
    0
);

console.log(
    "4.3 - Valor total do estoque: R$",
    valorTotalEstoque.toFixed(2)
);


// Questão 4.4 - map

const precosOriginais = [100, 200, 300];

const precosComDesconto = precosOriginais.map(
    preco => preco * 0.9
);

console.log("4.4 - Preços com desconto de 10%:", precosComDesconto);

const nomesProdutos = produtos.map(
    produto => produto.nome
);

console.log("4.4 - Nomes dos produtos:", nomesProdutos);


// Questão 4.5 - slice e sort

const produtosOrdenados = produtos.slice();

produtosOrdenados.sort(
    (a, b) => a.preco - b.preco
);

console.log(
    "4.5 - Produtos ordenados por preço crescente:",
    produtosOrdenados
);


// Questão 4.6 - some e find

const existeEstoqueBaixo = produtos.some(
    produto => produto.estoque < 5
);

console.log(
    "4.6 - Existe produto com estoque menor que 5?",
    existeEstoqueBaixo
);

// Novo cenário de inventário
const inventario = [
    { nome: 'Teclado', estoque: 15 },
    { nome: 'Mouse', estoque: 2 },
    { nome: 'Headset', estoque: 10 }
];

const existeEstoqueCritico = inventario.some(
    produto => produto.estoque < 5
);

console.log(
    "4.6 - Existe estoque crítico?",
    existeEstoqueCritico
);

const produtoCritico = inventario.find(
    produto => produto.estoque < 5
);

console.log("4.6 - Primeiro produto com estoque crítico:", produtoCritico);