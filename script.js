// Aguarda o documento HTML ser completamente carregado para então executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o elemento do formulário pelo seu ID
    const form = document.getElementById('form-contato');

    // Adiciona um "ouvinte de evento" que fica esperando o formulário ser submetido
    form.addEventListener('submit', function(event) {
        
        // Previne o comportamento padrão do formulário, que é recarregar a página.
        event.preventDefault();

        // Pega os valores dos campos de input, removendo espaços em branco do início e do fim com .trim()
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // --- VALIDAÇÃO ---

        // 1. Verifica se algum dos campos está vazio
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return; 
        }

        // 2. Verifica se o formato do e-mail é válido usando uma função auxiliar
        if (!validarEmail(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return; 
        }

        // --- SIMULAÇÃO DE ENVIO ---

        // Se todas as validações passaram, exibe a mensagem de sucesso
        alert('Mensagem enviada com sucesso!');

        // Limpa todos os campos do formulário
        form.reset();
    });

    // Função auxiliar para validar o formato do e-mail com uma expressão regular (Regex)
    function validarEmail(email) {
        // Expressão regular simples para validação de e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});