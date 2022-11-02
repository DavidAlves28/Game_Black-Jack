let jogo = confirm("Vamos começar ?")
let nomeJogador = prompt("Insira seu Nome ou Apelido")
while (nomeJogador.length === 0) {
    nomeJogador = prompt("Insira seu Nome ou Apelido")
};
// // CRIA NOME JOGADOR ATRAVEZ PROMPT
const jogador = document.querySelector(".jogador")
const ponto = document.createElement("h3")
const conteudoJ = document.createTextNode(` Jogador Um : ${nomeJogador}`)//cria nome
ponto.appendChild(conteudoJ)
jogador.insertAdjacentElement("beforeend", ponto)

function comprarCarta() {
    // Cria array de cartas
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    // Cria array de naipes
    const naipes = ["♦️", "♥️", "♣️", "♠️"]

    // Sorteia uma carta
    const numero = cartas[Math.floor(Math.random() * 13)]

    // Sorteia um naipe
    const naipe = naipes[Math.floor(Math.random() * 4)]

    let valor

    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (numero === "A") {
        valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
        valor = Number(numero)
    }

    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
    const carta = {
        texto: numero + naipe,
        valor: valor
    }

    return carta
}
if (jogo) {
    let carta1Jogador1 = comprarCarta()
    let carta2Jogador1 = comprarCarta()
    let carta3Jogador1
    let carta1Jogador2 = comprarCarta()
    let carta2Jogador2 = comprarCarta()
    let carta3Jogador2

    let pontosJogador1 = carta1Jogador1.valor + carta2Jogador1.valor
    let pontosJogador2 = carta1Jogador2.valor + carta2Jogador2.valor

    //verifica vencedor e botao comprar cartas
    let jogador1;
    let jogador2;
    let empate;
    jogador2 = pontosJogador2 === 21 ? `Jogador Dois venceu ! ` : ""
    jogador1 = pontosJogador1 === 21 ? `Jogador Um venceu ! ` : ""
    jogador1 = pontosJogador2 > 21  ? `Jogador Um venceu ! ` : ""
    jogador2 = pontosJogador1 > 21 ? `Jogador Dois venceu ! ` : ""
    empate = pontosJogador1 === pontosJogador2 ? "Empate, vamos jogar ?" : ""
    function novacarta(event) {
        event.preventDefault()
        console.log(event.target.value)
        if (pontosJogador1 < 21) {
            carta3Jogador1 = comprarCarta()
            // Se jogador comprar carta e pontos for menor que 21 entao o computador compra uma carta 
            if (pontosJogador1 < 21) {
                carta3Jogador2 = comprarCarta()
            }
            let totalJ = pontosJogador1 += carta3Jogador1.valor;
            let totalC = pontosJogador2 += carta3Jogador2.valor;

            // ATUALIZA PONTOS JOGODOR
            const atualizarPontosJ = document.querySelector(".totalJ")
            atualizarPontosJ.innerHTML = `PONTOS : ${totalJ}`
            // ATUALIZA PONTOS COMPUTADOR
            const atualizarPontosC = document.querySelector(".totalC")
            atualizarPontosC.innerHTML = `PONTOS : ${totalC}`
            console.log(pontosJogador1);
            console.log(pontosJogador2);
            console.log(carta3Jogador1);
            console.log(carta3Jogador2);
            // adicionar 3 carta a tela Jogador
            const cartaJ = document.querySelector(".cartaJ")
            const carta3 = document.createTextNode(`${carta3Jogador1.texto}`)
            cartaJ.appendChild(carta3)
            // adiciona 3 carta a tela computador
            const cartaC = document.querySelector(".cartaC")
            const carta3C = document.createTextNode(`${carta3Jogador2.texto}`)
            cartaC.appendChild(carta3C)
            // verificacao de pontos 
            jogador2 = pontosJogador2 === 21 ? `Computador venceu ! ` : ""
            jogador1 = pontosJogador1 === 21 ? `Jogador Um venceu ! ` : ""
            jogador1 = pontosJogador2 > 21 ? `Jogador Um venceu ! ` : ""
            jogador2 = pontosJogador1 > 21 ? `Computador venceu ! ` : ""
            empate = pontosJogador1 === pontosJogador2 ? "Empate, vamos jogar ?" : ""
            jogador2 = pontosJogador1 > 21 && pontosJogador2 < pontosJogador1 ? `Computador venceu ! ` : ""
            jogador1 = pontosJogador2 > 21 && pontosJogador1 < pontosJogador2 ? `Jogador Um venceu ! ` : ""


        }
        // BOTAO PARA PARAR JOGO JOGADOR

        // mostra vencedor

        const mostraVencedor = document.querySelector(".vencedor")
        const vencedor = document.createElement("h2")
        const pontoVencedor = document.createTextNode(` ${jogador1}${jogador2}${empate}`)
        vencedor.appendChild(pontoVencedor)
        vencedor.setAttribute("class", "vencedorTag")
        mostraVencedor.insertAdjacentElement("beforeend", vencedor)

        return
    }
    // funcao parar jogo
    function pararJogo(event) {
        event.preventDefault()
        if (jogo) {
            jogador2 = pontosJogador2 > pontosJogador1 ? `Computador venceu ! ` : ""
            jogador1 = pontosJogador1 > pontosJogador2 ? `Jogador Um venceu ! ` : ""
            empate = pontosJogador1 === pontosJogador2 ? "Empate, vamos jogar ?" : ""

            const mostraVencedor = document.querySelector(".vencedor")
            const vencedor = document.createElement("h2")
            const pontoVencedor = document.createTextNode(` ${jogador1}${jogador2}${empate}`)
            vencedor.appendChild(pontoVencedor)
            vencedor.setAttribute("class", "vencedorTag")
            mostraVencedor.insertAdjacentElement("beforeend", vencedor)
        }

        return
    }

    //Pontuacao jogador1 
    const pontuacao = document.querySelector(".pontuacaoJ")
    const pontos = document.createElement("h3")
    const pontoJ = document.createTextNode(` Pontos : ${pontosJogador1}`)
    pontos.appendChild(pontoJ)
    pontos.setAttribute("class", "totalJ")
    pontuacao.insertAdjacentElement("beforeend", pontos)

    // Pontuação jogador 2 computador
    const pontuacaoC = document.querySelector(".pontuacaoC")
    const pontosC = document.createElement("h3")
    const pontoC = document.createTextNode(`Pontos : ${pontosJogador2}`)
    pontosC.appendChild(pontoC)
    pontosC.setAttribute("class", "totalC")
    pontuacaoC.insertAdjacentElement("beforeend", pontosC)

    // Carta Jogador 1
    const cartaJ = document.querySelector(".cartaJ")
    const cartasJ = document.createElement("h3")
    const cartaConteudo = document.createTextNode(` Cartas : ${carta1Jogador1.texto}, ${carta2Jogador1.texto} `)
    cartasJ.appendChild(cartaConteudo)
    cartaJ.insertAdjacentElement("beforeend", cartasJ)

    // Carta Jogador Dois COmputador
    const cartaC = document.querySelector(".cartaC")
    const cartasC = document.createElement("h3")
    const cartaConteudoC = document.createTextNode(` Cartas : ${carta1Jogador2.texto}, ${carta2Jogador2.texto}`)
    cartasC.appendChild(cartaConteudoC)
    cartaC.insertAdjacentElement("beforeend", cartasC)





}





