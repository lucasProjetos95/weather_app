//banco de dados em armazenamento local:
localStorage.setItem('name', 'Jose');
localStorage.setItem('idade', 65);
localStorage.setItem('pais', 'Brasil');

// recuperando dados do armazenamento local:
let nome = localStorage.getItem('name');
let age = localStorage.getItem('idade');
let country = localStorage.getItem('pais');
console.log(nome, age, country);

//autalizando os dados - temos que subscrever os valores e há essas duas maneiras de subescrever uma nova declaração no setItem ou localStorage.nome da chave e declarar igualdade para o novo valor
localStorage.setItem('name', 'Antonio');
localStorage.idade = 50;
nome = localStorage.getItem('name');
age = localStorage.getItem('idade');
console.log(nome, age, country);

//excluindo dados do banco de dados - excluindo apenas um item:
localStorage.removeItem('idade');
age = localStorage.getItem('idade');
console.log(nome, age, country);
// excluindo todos os itens:
localStorage.clear();
age = localStorage.getItem('idade');
nome = localStorage.getItem('name');
country = localStorage.getItem('pais')
console.log(nome, age, country);


// armazenando dados mais complexos (matriz por exemplo)

const tarefas =[
    {text: 'comprar cebola', local:'mercado'},
    {text: 'comprar remedio', local:'farmacia'},
    {text: 'comprar pão', local:'padaria'}
];

//agora precisamos de transformar isso em uma string Json
//console.log(JSON.stringify(tarefas));
localStorage.setItem('tarefas', JSON.stringify(tarefas));
let armazen = localStorage.getItem('tarefas');
console.log(armazen );

// para utilizarmos essa string json no js precisamos de tranforma-la novemente em uma matriz, então usamos o método parse
console.log(JSON.parse(armazen));
localStorage.tarefas = JSON.parse(armazen);
armazen = localStorage.tarefas;
console.log(armazen)

