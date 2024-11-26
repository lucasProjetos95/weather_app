// onde se encontra os códigos para reagir com a APIs da previão


const chave = 'bjRmaxMAnyMKqk16sR2tH4RGQIQw70Z1';

//obter informações do clima(video 103):
const clima = async (acesso)=> {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const consulta = `${acesso}?apikey=${chave}`;
    const response = await fetch(base+consulta);
    const dados = await response.json();
    console.log(dados)
    return dados[0];// apesar de ter apenas um elemento selecionar o primerio elemento, apra retornar  um objeto e não uma matriz para facilitar no uso
}

//obter informações da cidade (video102):
const cidade = async (city)=>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const consulta = `?apikey=${chave}&q=${city}`;
    
    const response = await fetch(base+consulta);
    const dados = await response.json();
   

    return dados[0];

};

// isso será substituido pela solicitação q o usuario fará no app.js
// cidade('curitiba').then(dados => {
//      return clima(dados.Key);
//     }).then(dados => {
//         console.log(dados)
//     }).catch(erro => console.log(erro));



