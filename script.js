// Lista de dicas para o projeto Agrinho
const dicas = [
    "💧 Economia de água: A irrigação por gotejamento reduz o desperdício em até 50%.",
    "🌱 Rotação de culturas: Alternar as plantações ajuda a manter os nutrientes do solo.",
    "🐝 Proteja as abelhas: Elas são as maiores responsáveis pela polinização dos alimentos!",
    "☀️ Energia Solar: Usar painéis solares na fazenda reduz a pegada de carbono."
];

// Pegando os elementos do HTML
const botao = document.getElementById('btnDica');
const textoDica = document.getElementById('textoDica');

// Função que roda quando o botão é clicado
botao.addEventListener('click', () => {
    // Sorteia uma dica da lista
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    
    // Mostra o texto e remove a classe que escondia o elemento
    textoDica.textContent = dicaAleatoria;
    textoDica.classList.remove('escondido');
});