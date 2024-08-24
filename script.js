document.getElementById('sortearLetra').addEventListener('click', function() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letraSorteada = letras[Math.floor(Math.random() * letras.length)];
    document.getElementById('letraSorteada').textContent = `Letra sorteada: ${letraSorteada}`;
});

document.getElementById('jogoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const letraAtual = document.getElementById('letraSorteada').textContent.replace('Letra sorteada: ', '');
    const campos = ['pais', 'pessoa', 'fruta', 'animal', 'objeto'];

    let todosValidos = true;

    campos.forEach(campo => {
        const valor = document.getElementById(campo).value.trim().toUpperCase();
        if (!valor.startsWith(letraAtual)) {
            todosValidos = false;
            alert(`Erro: O campo ${campo} deve começar com a letra "${letraAtual}"!`);
        }
    });

    if (todosValidos) {
        alert('Todos os campos foram preenchidos corretamente!');
        document.getElementById('jogoForm').reset();
        document.getElementById('letraSorteada').textContent = '';
    }
});
