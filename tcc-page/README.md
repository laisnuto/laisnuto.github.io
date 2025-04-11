# TCC - Página Acadêmica

Esta é uma página acadêmica simples feita com React e TypeScript para apresentar seu Trabalho de Conclusão de Curso (TCC).

## Sobre o Projeto

Esta página web foi criada para servir como um espaço centralizado onde você pode apresentar:

- Informações gerais sobre seu TCC
- Metodologia utilizada
- Revisão bibliográfica
- Resultados preliminares
- Cronograma
- Informações de contato

## Tecnologias Utilizadas

- React 18
- TypeScript
- CSS inline para estilização

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14.0.0 ou superior)
- npm ou yarn

### Instalação

1. Clone este repositório
2. Navegue até a pasta do projeto
3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Executando localmente

```bash
npm start
# ou
yarn start
```

Isso iniciará a aplicação em modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.

## Como Personalizar

### Editar as informações do TCC

Abra o arquivo `src/App.tsx` e localize as seções que deseja editar. Você pode modificar:

- O título do TCC
- Seu nome
- Sua universidade
- O conteúdo de cada seção

### Adicionar ou remover seções

No arquivo `src/App.tsx`, localize o array `sections` e adicione ou remova objetos de seção conforme necessário. Cada seção deve ter um `id`, um `title` e um componente `content`.

### Alterações no estilo

Os estilos estão definidos como objetos JavaScript inline no componente `App`. Procure pelo objeto `styles` no arquivo `src/App.tsx` e modifique conforme necessário.

## Deployment

Para criar uma versão de produção otimizada do projeto, execute:

```bash
npm run build
# ou
yarn build
```

Isso criará a pasta `build` com os arquivos estáticos prontos para serem hospedados em qualquer serviço de hospedagem web, como GitHub Pages, Netlify, Vercel, etc.

## Licença

Este projeto está sob a licença MIT.
