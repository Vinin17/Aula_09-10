// 1. Exemplo simples de array
let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas);
// Declara um array chamado 'frutas' com 3 elementos do tipo string[cite: 2]


// 2. Criando arrays (formas diferentes)
let numeros = [10, 20, 30, 40];
console.log(numeros);
// Declara um array chamado 'numeros' com 4 valores numéricos[cite: 2]

let nomes = new Array('Ana', 'João', 'Carlos');
console.log(nomes);
// Cria um array chamado 'nomes' usando o construtor Array, com 3 strings[cite: 2]


// 3. Acessando e modificando arrays
console.log(frutas[0]); // 'maçã'
// Exibe o primeiro elemento do array 'frutas' (índice 0)[cite: 2]

frutas[1] = 'morango';
// Modifica o segundo elemento do array 'frutas' (indice 1) para 'morango'[cite: 2]

console.log(frutas);
// Exibe o array 'frutas' atualizado: ['maçã', 'morango', 'laranja'][cite: 2]


// 4. Exemplo com comentários (Métodos para adicionar e remover elementos)
frutas.push('uva');
// Adiciona a string 'uva' no final do array 'frutas'[cite: 2, 3]

frutas.pop();
// Remove o último elemento do array 'frutas' (neste caso, 'uva')[cite: 2, 3]

frutas.unshift('abacaxi');
// Adiciona 'abacaxi' no início do array 'frutas'[cite: 3]

frutas.shift();
// Remove o primeiro elemento do array 'frutas' (neste caso, 'abacaxi')[cite: 3]


// 5. Propriedades importantes
console.log(frutas.length); // 3
// Exibe o tamanho (quantidade de elementos) do array 'frutas'[cite: 3]


// 6. Métodos úteis para pesquisa
let pos = frutas.indexOf('morango');
// Procura índice da string 'morango' no array 'frutas'; retorna -1 se não encontrar[cite: 3]

console.log(pos); // Exibe o índice encontrado (exemplo: 1)[cite: 3]

console.log(frutas.includes('laranja'));
// Retorna true se 'laranja' estiver no array, senão false[cite: 3]


// 7. Percorrendo arrays
// Usando for tradicional:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    // Para cada índice i, exibe o elemento correspondente no array 'frutas'[cite: 4]
}

// Usando for...of:
for (let fruta of frutas) {
    console.log(fruta);
    // Para cada elemento 'fruta' dentro do array 'frutas', exibe seu valor[cite: 4]
}


// 8.1 Array de objetos
const alunos = [
    { nome: 'Ana', idade: 20, nota: 8.5 }, // Objeto com dados da aluna Ana[cite: 4, 5]
    { nome: 'João', idade: 22, nota: 6.7 }, // Objeto com dados do aluno João[cite: 4, 5]
    { nome: 'Maria', idade: 19, nota: 9.3 } // Objeto com dados da aluna Maria[cite: 5]
];

console.log(alunos[0].nome);
// Exibe o nome do primeiro aluno no array, que é 'Ana'[cite: 5]


// 8.2 O que é o filter?
// Sintaxe básica:
const novoArray = alunos.filter((elemento, indice, arrayOriginal) => {
    // retorna true para manter o elemento, false para descartar[cite: 5]
});

// Filtrar alunos com nota maior que 7
const aprovadosFilter = alunos.filter(aluno => aluno.nota > 7);
// Cria um novo array com alunos cuja nota é maior que 7 usando a função filter[cite: 5, 6]

console.log(aprovadosFilter);
// Exibe os alunos aprovados filtrados[cite: 6]

// Exemplo simples: filtrar números pares
const numerosParesEx = [1, 2, 3, 4, 5, 6];
const pares = numerosParesEx.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4, 6][cite: 6]

// Exemplo com objetos: filtrar alunos aprovados
const alunosNotas = [
    { nome: 'Ana', nota: 8 },
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 9 }
];
const aprovadosNotas = alunosNotas.filter(aluno => aluno.nota >= 7);
console.log(aprovadosNotas);


// 8.3 O que é o reduce?
// Exemplo simples: soma dos números
const numerosSoma = [1, 2, 3, 4];
const soma = numerosSoma.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // 10[cite: 7]

// Somar todas as notas usando reduce
const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
// Soma todas as notas do array 'alunos' começando do valor 0[cite: 7, 8]
console.log(somaNotas);
// Exibe a soma total das notas[cite: 8]


// 8.4 O que é o map?
// Exemplo simples: dobrar números
const numerosDobro = [1, 2, 3, 4];
const dobro = numerosDobro.map(numero => numero * 2);
console.log(dobro); // [2, 4, 6, 8][cite: 8]

// Exemplo com objetos: pegar só os nomes
const alunosMap = [
    { nome: 'Ana', idade: 20 },
    { nome: 'João', idade: 22 },
    { nome: 'Maria', idade: 19 }
];
const nomesAlunosMap = alunosMap.map(aluno => aluno.nome);
console.log(nomesAlunosMap); // ['Ana', 'João', 'Maria'][cite: 8, 9]


// 8.5 Criar um novo array só com os nomes dos alunos
const nomesAlunos = alunos.map(aluno => aluno.nome);
// Cria um array com apenas os nomes dos alunos usando map[cite: 9]
console.log(nomesAlunos);
// Exibe o array ['Ana', 'João', 'Maria'][cite: 9]


// 8.6 Ordenar alunos por idade
const alunosOrdenados = alunos.slice().sort((a, b) => a.idade - b.idade);
// Cria uma cópia do array com slice(), depois ordena pela idade crescente com sort()[cite: 9]
console.log(alunosOrdenados);
// Exibe o array de alunos ordenado por idade[cite: 9]


// 8.7 Verificar se algum aluno tem nota abaixo de 6
const temReprovadoGeral = alunos.some(aluno => aluno.nota < 6);
// Verifica se existe pelo menos um aluno com nota menor que 6 usando some()[cite: 9, 10]
console.log(temReprovadoGeral);
// Exibe true ou false (neste caso false, pois nenhum aluno está abaixo de 6)[cite: 10]

const alunosAvaliacao = [
    { nome: 'Ana', nota: 8 },
    { nome: 'João', nota: 5 },
    { nome: 'Carlos', nota: 7 }
];

// Verifica se há algum reprovado[cite: 10]
const temReprovado = alunosAvaliacao.some(aluno => aluno.nota < 6);
console.log(temReprovado); // true[cite: 10]

// Encontra o primeiro aluno reprovado[cite: 10]
const alunoReprovado = alunosAvaliacao.find(aluno => aluno.nota < 6);
console.log(alunoReprovado);
// find() retorna o primeiro objeto que cumpre a condição (nesse caso, o aluno reprovado)[cite: 10].