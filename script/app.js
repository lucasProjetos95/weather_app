// onde vamos fazer toda a manipulação com o DOM

const formulario = document.querySelector('form');
const cartao =document.querySelector('.foto');
const detalhes = document.querySelector('.inform');
const time = document.querySelector('img.tempo');
const icon = document.querySelector('.icone img')

//criar função para obter dados da situação climática e atualizar a interface:
const atualizacaoUI = (dados) =>{
    // const detalhesCidade = dados.detalhesCidade; 
    // const situacao = dados.situacao;

//desetruturação de propriedades: quando a variavel possui o mesmo nome da propriedade que está sendo usada, é possivel criar as variaves assim, coloco o nome das propriedades dentro de uma chave e dou valor igual ao nome do objeto, então sera criado para cada propriedade uma variavel com o mesmo nome e irá buscar no objeto as devidas propriedades
const { detalhesCidade, situacao } = dados;

    //atualizar as informações
    detalhes.innerHTML = `
        <h5 class="my-3">${detalhesCidade.EnglishName}</h5>
        <div class="my-3">${situacao.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${situacao.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
`;
//atualizando a imagem e o icone do clima UI

const iconSrc = `img/icone/${situacao.WeatherIcon}.svg`;
icon.setAttribute('src', iconSrc);

// operador térnario,
let tempSrc = situacao.IsDayTime ? 'img/day.svg':'img/night.svg';
//  let tempSrc = null;
//  if(situacao.IsDayTime){
//     tempSrc = 'img/day.svg';
//  } else{
//     tempSrc = 'img/night.svg';
//  }
 time.setAttribute('src', tempSrc);
    // removendo a classe que  tira o display- none inicial do nosso app se houver, para aparecer as informações:
    
    if(cartao.classList.contains('d-none')){
        cartao.classList.remove('d-none')
    }
    

}





//criar uma função async para chamar as funções async da previsão.js
const cidadeAtualizada = async (local) =>{
    //console.log(cidade)
    // passaremos o local como paramentro da função cidade que estamos chamando do app.js - e situacao para a função de clima
    const detalhesCidade = await cidade(local);
    const situacao = await clima(detalhesCidade.Key);
    // retornar dois valores dos objetos buscados para quando a cidadeAtualizada for chamada:
    // quando retorna um objeto e damos o mesmo nome para a propriedade e o valor, podemos abreviar, apagando o nome da propriedade e colocando na mesma linha do retorno, nesse caso ficará assim:
    // return {
    //     detalhesCidade: detalhesCidade,
    //     situacao: situacao
    // }
        return { detalhesCidade, situacao }
}

formulario.addEventListener('submit',e =>{
    // desativandoa a ação padrão de atualização
    e.preventDefault();
    //armazenando a cidade digitada,  chamando o name q foi dado no input, solicitando o value e cortando os espaços em branco trim();:
    const local = formulario.city.value.trim();
    // apos aramzenar o valor, limpar o campo de busca:
    formulario.reset();
    // atualiazr a interface do usuario com a nova cidade:
    cidadeAtualizada(local)
    .then(dados => atualizacaoUI(dados))
    .catch(erro=> console.log(erro))

    //armazenamento local
    localStorage.setItem('cities', local );

} );

if (localStorage.getItem('cities')){
     cidadeAtualizada(localStorage.getItem('cities'))
     .then(dados => atualizacaoUI(dados))
     .catch(erro=> console.log('erro'))
}