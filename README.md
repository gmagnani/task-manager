# 📋 Task Manager

Um sistema moderno de gerenciamento de tarefas desenvolvido para facilitar a organização, criação e acompanhamento das suas atividades diárias.

**[🔗 Link do Deploy / Demo Placeholder]**

---

## 🚀 Tecnologias

Este projeto foi construído utilizando as melhores práticas do ecossistema React, com as seguintes bibliotecas e ferramentas:

- **[React 19](https://react.dev/)**: Biblioteca JavaScript para interfaces de usuário, garantindo alta performance e interatividade.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida (bundler) que oferece HMR instantâneo para o desenvolvimento.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário para estilização performática de interfaces.
- **[React Router](https://reactrouter.com/)**: Gerenciamento de navegação e roteamento (SPA) da aplicação.
- **[React Hook Form](https://react-hook-form.com/)**: Biblioteca otimizada para lidar com validação de formulários complexos.
- **[Reack Query (@tanstack/react-query)](https://tanstack.com/)**: Gerenciamento de estado do servidor e _data fetching_ reativo.
- **[JSON Server](https://github.com/typicode/json-server)**: Fake REST API embutida para mock e desenvolvimento local eficiente.
- **[Axios](https://axios-http.com/)**: Cliente HTTP flexível para integração padronizada de chamadas a endpoints de APIs.

---

## ✨ Funcionalidades (Features)

A aplicação dispõe de recursos desenhados para uma experiência fluida:

- **Dashboard Interativo**: Visões agregadas e resumos de produtividade (Cards com métricas globais e de status).
- **Gerenciamento de Tarefas Inteligente**: Criação, listagem simples, visualização focada e separação lógica das pendências.
- **Validação de Formulários**: Diálogos (Add Task Dialog) com controle rigoroso de dados do usuário para inserção precisa de horários.
- **Detalhes da Tarefa**: Página completa contendo especificações ou histórico individual por tarefa (Task Details Page).
- **Arquitetura Escalável & Responsiva**: Estrutura modular de Sidebars flexíveis para otimizar os espaços de tela em multi-layouts.
- **Feedback Sensorial UI**: Alertas consistentes e modais usando a biblioteca _Sonner_ garantindo clareza proativa ao gerenciar status.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de que seu ambiente dispõe das seguintes ferramentas:

- **[Node.js](https://nodejs.org/)** (v18.x ou superior)
- Gerenciador de dependências aplicável (**[npm](https://www.npmjs.com/)**, integrado ao Node, ou **Yarn** / **pnpm**)

---

## 🛠️ Instalação e Execução

Siga este passo a passo simplificado para clonar e rodar o projeto localmente.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/task-manager.git
   cd task-manager
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de dados Fake (Backend Mock API):**
   Como este projeto usa `json-server` para interações de dados locais, inicie o banco local na porta `3000`:
   ```bash
   npx json-server db.json -p 3000
   ```

4. **Inicie a aplicação de Frontend (Vite):**
   Abra uma nova aba do terminal e ative o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

Ao concluir a compilação, a aplicação estará disponível no navegador, geralmente em `http://localhost:5173/`.

---

## ⚙️ Variáveis de Ambiente

O projeto exige o acoplamento de variáveis de ambiente para a correta resolução de requisições API.
Crie um arquivo `.env.development` com base nas chaves do ambiente local (observando que o `.env.production` será lido automaticamente em build):

```env
# URL base para o Backend da aplicação
VITE_API_URL=http://localhost:3000
```

> **Atenção:** Evite comitar chaves sensíveis ao realizar deploy real (não adicione senhas de produção).

---

## 📂 Estrutura de Pastas

O código fonte deste projeto adota uma arquitetura limpa de componentes:

```text
task-manager/
├── public/                 # Favicons estáticos (Acessíveis livremente)
├── src/
│   ├── assets/             # SVGs, ícones brutos ou demais estáticos nativos
│   ├── components/         # Blocos universais limpos (Botões custom, InputLabel, Modais)
│   ├── hooks/              # Custom Hooks unificados do React para lógica transicional
│   ├── keys/               # Arquivos chave ou de parametrização estrita de dados
│   ├── lib/                # Configurações globais de dependências ou clientes (Axios etc.)
│   ├── pages/              # Módulos de telas primárias (HomePage, TasksPage, TaskDetailsPage)
│   ├── index.css           # Estilos base injetando TailwindCSS v4
│   └── main.jsx            # Entry point central da arvore do React
├── eslint.config.js        # Regras de linting de JavaScript p/ consistência 
├── vite.config.js          # Definições modulares da compilação e plugins do Vite
└── README.md               # Esta documentação
```

---

## 🤝 Contribuição

Contribuições são fundamentais para escalar esta aplicação! Siga o padrão *GitHub Flow* para propor novas features e reportar bugs:

1. Faça o **Fork** deste projeto
2. Crie uma nova _branch_ com o escopo (`git checkout -b feature/nome-da-feature`)
3. Faça _commit_ de suas modificações de forma clara (`git commit -m 'feat: descrição clara da refatoração'`)
4. Faça o _push_ para a sua _branch_ (`git push origin feature/nome-da-feature`)
5. Abra um novo **Pull Request** descrevendo profundamente suas mudanças.

### Diretrizes de Estilo do Projeto

- **Linting Rigoroso:** Este projeto conta com _ESLint_ e _Prettier_. Garanta que seu código passe pelas regras nativas (`npm run lint`).
- **Arquitetura Sólida:** Prefira componentes de responsabilidade única. Se criar múltiplos hooks que dependem de estado complexo, avalie utilizar o _TanStack Query_ já importado.
