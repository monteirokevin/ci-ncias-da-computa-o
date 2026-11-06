/* ==========================================================
   PROJETO INTEGRADOR - FUNDAMENTOS DA WEB
   ONG TRANSFORMAR VIDAS - FUNCIONALIDADES JS
   ========================================================== */

/* ----------------------------------------------------------
   FUNCIONALIDADE 1: Validação do Formulário com addEventListener
   (Exclusivo da página contato.html)
   ---------------------------------------------------------- */
const formContato = document.getElementById("form-contato");

if (formContato) {
  formContato.addEventListener("submit", function (event) {
    // 1. Evita o recarregamento padrão da página
    event.preventDefault();

    // 2. Elementos dos campos
    const inputNome = document.getElementById("campo-nome");
    const inputEmail = document.getElementById("campo-email");
    const inputAssunto = document.getElementById("campo-assunto");
    const inputMensagem = document.getElementById("campo-mensagem");
    const areaStatus = document.getElementById("mensagem-status");

    // 3. Leitura e tratamento de espaços desnecessários com trim()
    const valorNome = inputNome.value.trim();
    const valorEmail = inputEmail.value.trim();
    const valorAssunto = inputAssunto.value.trim();
    const valorMensagem = inputMensagem.value.trim();

    // 4. Verificações lógicas dos requisitos da rubrica
    if (valorNome.length < 3) {
      areaStatus.textContent = "Erro: O campo Nome deve ter pelo menos 3 caracteres.";
      areaStatus.className = "msg-status msg-erro";
      areaStatus.style.display = "block";
      inputNome.focus();
      return;
    }

    // Validação de formato de e-mail usando a checagem nativa do navegador
    if (valorEmail === "" || !inputEmail.checkValidity()) {
      areaStatus.textContent = "Erro: Informe um endereço de e-mail válido (exemplo: usuario@dominio.com).";
      areaStatus.className = "msg-status msg-erro";
      areaStatus.style.display = "block";
      inputEmail.focus();
      return;
    }

    if (valorAssunto === "") {
      areaStatus.textContent = "Erro: Selecione ou informe o assunto da mensagem.";
      areaStatus.className = "msg-status msg-erro";
      areaStatus.style.display = "block";
      inputAssunto.focus();
      return;
    }

    if (valorMensagem.length < 10) {
      areaStatus.textContent = "Erro: A mensagem deve conter pelo menos 10 caracteres explicativos.";
      areaStatus.className = "msg-status msg-erro";
      areaStatus.style.display = "block";
      inputMensagem.focus();
      return;
    }

    // 5. Sucesso: Feedback visual claro no HTML com aviso de envio simulado
    areaStatus.textContent = "Mensagem validada com sucesso! (Aviso: envio apenas simulado - projeto acadêmico). Agradecemos seu contato!";
    areaStatus.className = "msg-status msg-sucesso";
    areaStatus.style.display = "block";

    // Limpa os campos após simulação
    formContato.reset();
  });
}

/* ----------------------------------------------------------
   FUNCIONALIDADE 2: Interação Adicional (Mostrar/Ocultar Informação)
   (Disponível na página sobre.html)
   ---------------------------------------------------------- */
const btnAlternar = document.getElementById("btn-alternar-dados");
const painelDados = document.getElementById("conteudo-adicional");

if (btnAlternar && painelDados) {
  // Inicialização do estado visual
  painelDados.style.display = "none";

  btnAlternar.addEventListener("click", function () {
    // Alterna visibilidade do elemento no DOM
    if (painelDados.style.display === "none") {
      painelDados.style.display = "block";
      btnAlternar.textContent = "Ocultar Detalhes de Transparência";
    } else {
      painelDados.style.display = "none";
      btnAlternar.textContent = "Ver Detalhes de Transparência e Certificações";
    }
  });
}
