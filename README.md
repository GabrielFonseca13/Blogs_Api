# Projeto Blogs API
Este projeto consiste no desenvolvimento de uma API e um banco de dados para a produção de conteúdo em um blog. A API será construída em Node.js, utilizando o pacote Sequelize para realizar operações de CRUD nos posts.

# Visão Geral
A Blogs API é uma API RESTful que permite a criação, leitura, atualização e exclusão de posts de blog. Ela foi desenvolvida para atender às necessidades de um sistema de gerenciamento de blogs, fornecendo endpoints para interação com o banco de dados.

A API segue os princípios do REST, fornecendo endpoints bem definidos e padronizados para cada operação. Além disso, a autenticação é obrigatória para a criação de posts, exigindo que os usuários façam login antes de enviar suas contribuições.

A relação entre usuários e posts é cuidadosamente gerenciada, garantindo que cada post seja associado ao usuário que o criou. Dessa forma, é possível rastrear a autoria de cada post e fornecer recursos adicionais, como a possibilidade de listar todos os posts de um determinado usuário.

A API também permite a categorização dos posts, usando o conceito de categorias. Cada post pode estar associado a uma ou mais categorias, e é possível listar todos os posts de uma determinada categoria, bem como obter todas as categorias de um determinado post.

# Tecnologias Utilizadas
Node.js: plataforma de desenvolvimento JavaScript no lado do servidor.
Sequelize: pacote Node.js para interagir com bancos de dados SQL.
Express.js: framework web rápido e minimalista para Node.js.
MySQL: banco de dados SQL para armazenar os dados dos posts, usuários e categorias.

# Funcionalidades
Autenticação de usuários para criar, atualizar e excluir posts.
CRUD de posts de blog, permitindo a criação, leitura, atualização e exclusão.
Associação de posts a usuários, garantindo a autoria correta.
Categorização de posts por meio da associação com categorias.
Listagem de posts de um usuário específico.
Listagem de todos os posts de uma determinada categoria.

<!-- # Instalação
Para executar o projeto em sua máquina local, siga as etapas abaixo:

Certifique-se de ter o Node.js e o PostgreSQL instalados em seu sistema.

Clone este repositório para sua máquina local usando o comando:

bash
Copy code
git clone https://github.com/seu-usuario/blogs-api.git
Acesse o diretório do projeto:

bash
Copy code
cd blogs-api
Instale as dependências do projeto executando o comando:

Copy code
npm install
Configure as variáveis de ambiente necessárias. Renomeie o arquivo .env.example para .env e preencha as informações necessárias, como as credenciais do banco de dados.

Execute as migrações do banco de dados para criar as tabelas necessárias:

Copy code
npx sequelize-cli db:migrate
Inicie o servidor executando o comando:

sql
Copy code
npm start
A API estará disponível em http://localhost:3000.
 -->
# Contato
Em caso de dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

**Nome: Gabriel Fonseca**

**LinkedIn:** https://www.linkedin.com/in/gabriel-fonseca-tech/

**Email:** Gabriel.Fonseca@live.com

Espero que este README seja útil para o desenvolvimento do projeto TrybeSmith.

<!-- ## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Visão Geral

[Inclua uma descrição mais detalhada do projeto. Explique o problema que ele resolve e as funcionalidades principais.]

## Tecnologias utilizadas

- [Lista de tecnologias/frameworks utilizados no projeto]

## Instalação

[Instruções passo a passo para instalar e configurar o projeto localmente. Inclua requisitos de sistema, dependências e etapas específicas.]

## Como usar

[Explique como utilizar o projeto. Forneça exemplos e instruções para executar o projeto.]

## Contribuição

[Explique como os outros podem contribuir para o projeto. Inclua informações sobre como criar problemas (issues) e enviar solicitações de pull (pull requests).]

## Licença

[Indique a licença sob a qual o projeto é distribuído. Você pode usar uma licença popular, como MIT, Apache, GNU, ou qualquer outra que se aplique.]

## Contato

[Inclua informações de contato para que os usuários possam entrar em contato com você em caso de dúvidas, problemas ou colaborações. Você pode fornecer seu endereço de e-mail, links para perfis de redes sociais ou qualquer outro método de contato que preferir.]

[Inclua qualquer outra informação relevante sobre o projeto.]

 -->
