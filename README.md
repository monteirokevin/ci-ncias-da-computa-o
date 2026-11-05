# Projeto Integrador: ONG Transformar Vidas

## 1. Identificação do Projeto
- **Instituição / Disciplina:** Fundamentos da Web e Desenvolvimento Front-end (HTML, CSS e JavaScript)
- **Tema:** Site Institucional e Interativo de Organização Não Governamental (ONG)
- **Nome da ONG:** ONG Transformar Vidas (Organização fictícia para fins educacionais)
- **Integrantes da Equipe:** [Preencher com os nomes dos integrantes do grupo]

---

## 2. Causa Social e Público Atendido (Critério C1 e P2)
- **Causa Social:** Apoio integral, educação e combate à exclusão de crianças e adolescentes em situação de vulnerabilidade social e marginalização econômica em comunidades periféricas.
- **Missão:** Oferecer suporte no contraturno escolar por meio de reforço pedagógico, oficinas artísticas, alimentação balanceada e acolhimento humano.
- **Público:** Crianças e jovens de 6 a 16 anos e suas famílias.

---

## 3. Estrutura de Arquivos e Páginas (Critérios P1, P2 e P3)
O projeto está organizado na seguinte árvore de diretórios:

```
ONG_Transformar_Vidas/
│
├── index.html       # Página inicial com banner, missão e apresentação da causa
├── sobre.html       # Histórico, valores e painel interativo de transparência
├── projetos.html    # 3 iniciativas sociais com formas de apoio comunitário
├── contato.html     # Formulário de contato validado por JavaScript
│
├── css/
│   └── estilos.css  # Folha de estilos externa compartilhada (Flexbox e @media responsivo)
│
├── js/
│   └── script.js    # Código JavaScript com validação e interação do DOM via addEventListener
│
└── README.md        # Documentação e guia de execução da entrega
```

---

## 4. Funcionalidades JavaScript Obrigatórias (Critérios P8 e P9)

### Funcionalidade 1: Validação do Formulário de Contato (`contato.html`)
- Utiliza `addEventListener("submit", ...)` com `event.preventDefault()` para impedir recarregamento da página.
- Lê os 4 campos (`nome`, `email`, `assunto`, `mensagem`) e aplica `.trim()`.
- Validações realizadas:
  - Nome com no mínimo 3 caracteres;
  - E-mail não vazio e válido via `inputEmail.checkValidity()`;
  - Assunto não vazio;
  - Mensagem com no mínimo 10 caracteres.
- Exibe mensagens visuais no próprio DOM (vermelho para erros e verde com aviso de envio simulado quando válido).

### Funcionalidade 2: Interação Adicional de Mostrar/Ocultar Informações (`sobre.html`)
- Utiliza `addEventListener("click", ...)` associado a um botão (`#btn-alternar-dados`).
- Altera a propriedade `style.display` do elemento `#conteudo-adicional` entre `'none'` e `'block'`.
- Atualiza o texto do próprio botão indicando o estado (ex.: "Ver Detalhes..." vs "Ocultar Detalhes...").
- Funciona repetidamente sem recarregar a página.

---

## 5. Instruções de Execução e Demonstração
1. Descompacte o arquivo `ONG_Transformar_Vidas.zip`.
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).
3. Navegue pelo menu superior para acessar as 4 páginas.
4. Para testar a responsividade, abra a ferramenta de desenvolvedor (`F12`), ative o modo dispositivo móvel e teste em larguras próximas de **390 px** (celular) e **1280 px** (desktop).
5. Na página **Sobre**, clique no botão para testar a exibição e o recolhimento das informações de transparência.
6. Na página **Contato**, teste o envio do formulário em branco ou incompleto para observar os avisos de erro e, em seguida, preencha corretamente para verificar o aviso de confirmação simulada.

---

## 6. Créditos e Ética Acadêmica (Critério A1)
- **Créditos:** As ilustrações visuais foram desenvolvidas em SVG inline/vetorial nativo, garantindo total compatibilidade offline e independência de serviços externos.
- **Aviso Ético:** Este projeto é estritamente acadêmico. Nenhum dado pessoal é transmitido ou armazenado em bancos de dados e não há arrecadação financeira real.
