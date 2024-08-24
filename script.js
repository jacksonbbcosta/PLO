document.addEventListener('DOMContentLoaded', function() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let totalPontos = 0;

    // Gera as 10 linhas na tabela
    const tabela = document.getElementById('jogoTabela');
    for (let i = 0; i < 10; i++) {
        const row = tabela.insertRow();
        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell();
            cell.innerHTML = `<input type="text" class="campo">`;
        }
        row.insertCell().textContent = '0';  // Pontos iniciais
    }

    document.getElementById('sortearLetra').addEventListener('click', function() {
        const letraSorteada = letras[Math.floor(Math.random() * letras.length)];
        document.getElementById('letraSorteada').textContent = `Letra sorteada: ${letraSorteada}`;
    });

    document.getElementById('jogoForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const letraAtual = document.getElementById('letraSorteada').textContent.replace('Letra sorteada: ', '');
        const linhas = tabela.rows;

        for (let i = 1; i < linhas.length; i++) {  // Pula a linha de cabeçalho
            const cells = linhas[i].getElementsByTagName('td');
            let pontosLinha = 0;

            for (let j = 0; j < 5; j++) {
                const valor = cells[j].getElementsByTagName('input')[0].value.trim().toUpperCase();
                if (valor.startsWith(letraAtual) && valor !== '') {
                    pontosLinha += 10;
                }
            }

            cells[5].textContent = pontosLinha;  // Atualiza a pontuação da linha
            totalPontos += pontosLinha;
        }

        document.getElementById('totalPontos').textContent = `Total de Pontos: ${totalPontos}`;
        document.getElementById('jogoForm').reset();
        document.getElementById('letraSorteada').textContent = '';
    });
});
