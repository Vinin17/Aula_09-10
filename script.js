// 1. Exemplo simples de array
document.getElementById('ex1').textContent = `let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas);
// Declara um array chamado 'frutas' com 3 elementos do tipo string`;

// 2. Criando arrays (formas diferentes)
document.getElementById('ex2').textContent = `let numeros = [10, 20, 30, 40];
console.log(numeros);
// Declara um array chamado 'numeros' com 4 valores numéricos

let nomes = new Array('Ana', 'João', 'Carlos');
console.log(nomes);
// Cria um array chamado 'nomes' usando o construtor Array, com 3 strings`;

// 3. Acessando e modificando arrays
document.getElementById('ex3').textContent = `console.log(frutas[0]); // 'maçã'
// Exibe o primeiro elemento do array 'frutas' (índice 0)

frutas[1] = 'morango';
// Modifica o segundo elemento do array 'frutas' (indice 1) para 'morango'

console.log(frutas);
// Exibe o array 'frutas' atualizado: ['maçã', 'morango', 'laranja']`;

// 4. Exemplo com comentários (Métodos para adicionar e remover elementos)
document.getElementById('ex4').textContent = `frutas.push('uva');
// Adiciona a string 'uva' no final do array 'frutas'

frutas.pop();
// Remove o último elemento do array 'frutas' (neste caso, 'uva')

frutas.unshift('abacaxi');
// Adiciona 'abacaxi' no início do array 'frutas'

frutas.shift();
// Remove o primeiro elemento do array 'frutas' (neste caso, 'abacaxi')`;

// 5. Propriedades importantes
document.getElementById('ex5').textContent = `console.log(frutas.length); // 3
// Exibe o tamanho (quantidade de elementos) do array 'frutas'`;

// 6. Métodos úteis para pesquisa
document.getElementById('ex6').textContent = `let pos = frutas.indexOf('morango');
// Procura índice da string 'morango' no array 'frutas'; retorna -1 se não encontrar

console.log(pos); // Exibe o índice encontrado (exemplo: 1)

console.log(frutas.includes('laranja'));
// Retorna true se 'laranja' estiver no array, senão false`;

// 7. Percorrendo arrays
document.getElementById('ex7').textContent = `// Usando for tradicional:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    // Para cada índice i, exibe o elemento correspondente no array 'frutas'
}

// Usando for...of:
for (let fruta of frutas) {
    console.log(fruta);
    // Para cada elemento 'fruta' dentro do array 'frutas', exibe seu valor
}`;

// 8.1 Array de objetos
document.getElementById('ex8_1').textContent = `const alunos = [
    { nome: 'Ana', idade: 20, nota: 8.5 }, // Objeto com dados da aluna Ana
    { nome: 'João', idade: 22, nota: 6.7 }, // Objeto com dados do aluno João
    { nome: 'Maria', idade: 19, nota: 9.3 } // Objeto com dados da aluna Maria
];

console.log(alunos[0].nome);
// Exibe o nome do primeiro aluno no array, que é 'Ana'`;

// 8.2 O que é o filter?
document.getElementById('ex8_2').textContent = `// Sintaxe básica
const novoArray = array.filter((elemento, indice, arrayOriginal) => {
    // retorna true para manter o elemento, false para descartar
});
// • elemento: item atual sendo processado no array
// • índice (opcional): a posição do elemento no array
// • arrayOriginal (opcional): o array original onde o filter foi chamado

// Filtrar alunos com nota maior que 7
const aprovados = alunos.filter(aluno => aluno.nota > 7);
// Cria um novo array com alunos cuja nota é maior que 7 usando a função filter

console.log(aprovados);
// Exibe os alunos aprovados filtrados

// Exemplo simples: filtrar números pares
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4, 6]
// Explicação:
// • A função callback verifica se o número é divisível por 2 (numero % 2 === 0).
// Se for, filter mantém o elemento no novo array.
// Resultado: só os números pares ficam em pares.

// Exemplo com objetos: filtrar alunos aprovados
const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 9 }
];
const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log(aprovados);
// [
//   { nome: 'Ana', nota: 8 },
//   { nome: 'Maria', nota: 9 }
// ]`;

// 8.3 O que é o reduce?
document.getElementById('ex8_3').textContent = `// Sintaxe básica
array.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {
    // lógica que retorna o novo acumulador
}, valorInicial);
// acumulador: valor que vai guardando o resultado da operação a cada passo (inicializado com valorInicial)
// elementoAtual: o elemento do array que está sendo processado no momento
// índice (opcional): posição do elemento atual no array
// arrayOriginal (opcional): o próprio array original que está sendo reduzido
// valorInicial (opcional, mas recomendado): valor inicial do acumulador

// Exemplo simples: soma dos números
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // 10

// Somar todas as notas usando reduce
const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
// Soma todas as notas do array 'alunos' começando do valor 0
console.log(somaNotas);
// Exibe a soma total das notas`;

// 8.4 O que é o map?
document.getElementById('ex8_4').textContent = `// Sintaxe básica
const novoArray = array.map((elemento, indice, arrayOriginal) => {
    // retorna o novo valor que vai para o novo array
});
// elemento: item atual do array que está sendo processado
// índice (opcional): a posição do elemento
// arrayOriginal (opcional): o array original

// Exemplo simples: dobrar números
const numeros = [1, 2, 3, 4];
const dobro = numeros.map(numero => numero * 2);
console.log(dobro); // [2, 4, 6, 8]

// Exemplo com objetos: pegar só os nomes
const alunos = [
    { nome: 'Ana', idade: 20 },
    { nome: 'João', idade: 22 },
    { nome: 'Maria', idade: 19 }
];
const nomes = alunos.map(aluno => aluno.nome);
console.log(nomes); // ['Ana', 'João', 'Maria']
// Quando usar o map?
// • Para transformar dados de um array.
// • Para criar um novo array com base no original, mudando cada item.
// Muito útil para formatar dados para exibição.`;

// 8.5 Criar um novo array só com os nomes dos alunos
document.getElementById('ex8_5').textContent = `const nomesAlunos = alunos.map(aluno => aluno.nome);
// Cria um array com apenas os nomes dos alunos usando map
console.log(nomesAlunos);
// Exibe o array ['Ana', 'João', 'Maria']`;

// 8.6 Ordenar alunos por idade
document.getElementById('ex8_6').textContent = `const alunosOrdenados = alunos.slice().sort((a, b) => a.idade - b.idade);
// Cria uma cópia do array com slice(), depois ordena pela idade crescente com sort()
console.log(alunosOrdenados);
// Exibe o array de alunos ordenado por idade`;

// 8.7 Verificar se algum aluno tem nota abaixo de 6
document.getElementById('ex8_7').textContent = `const temReprovado = alunos.some(aluno => aluno.nota < 6);
// Verifica se existe pelo menos um aluno com nota menor que 6 usando some()
console.log(temReprovado);
// Exibe true ou false (neste caso false, pois nenhum aluno está abaixo de 6)

const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'João', nota: 5 },
    { nome: 'Carlos', nota: 7 }
];

// Verifica se há algum reprovado
const temReprovado = alunos.some(aluno => aluno.nota < 6);
console.log(temReprovado); // true

// Encontra o primeiro aluno reprovado
const alunoReprovado = alunos.find(aluno => aluno.nota < 6);
// find() retorna o primeiro objeto que cumpre a condição (nesse caso, o aluno reprovado).`;