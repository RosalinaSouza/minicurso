const botao = document.querySelector('button');

const imagemUm = document.querySelector("#imagemUm");
const nomeDoPersonagemUm = document.querySelector('#nomeUm');
const especieUm = document.querySelector('#especieUm');
const condicaoUm  = document.querySelector('#statusUm');

const imagemDois = document.querySelector("#imagemDois");
const nomeDoPersonagemDois = document.querySelector('#nomeDois');
const especieDois = document.querySelector('#especieDois');
const condicaoDois  = document.querySelector('#statusDois');

const imagemTres = document.querySelector("#imagemTres");
const nomeDoPersonagemTres = document.querySelector('#nomeTres');
const especieTres = document.querySelector('#especieTres');
const condicaoTres = document.querySelector('#statusTres');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagemUm = () =>{
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type":'aplication/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemUm.src = data.image;
        imagemUm.alt = data.name;
        nomeDoPersonagemUm.innerHTML = data.name;
        especieUm.innerHTML = data.species;
        condicaoUm.innerHTML = data.status;

    });
}

pegarPersonagemDois = () =>{
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type":'aplication/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemDois.src = data.image;
        imagemDois.alt = data.name;
        nomeDoPersonagemDois.innerHTML = data.name;
        especieDois.innerHTML = data.species;
        condicaoDois.innerHTML = data.status;

    });
}

pegarPersonagemTres = () =>{
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type":'aplication/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemTres.src = data.image;
        imagemTres.alt = data.name;
        nomeDoPersonagemTres.innerHTML = data.name;
        especieTres.innerHTML = data.species;
        condicaoTres.innerHTML = data.status;

    });
}

sortearPersonagens = () => {
    pegarPersonagemUm();
    pegarPersonagemDois();
    pegarPersonagemTres();
}

botao.onclick = sortearPersonagens;