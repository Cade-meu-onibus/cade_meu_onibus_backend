# Projeto Cadê meu Onibus Backend

Esta é uma API que permite realizar operações de CRUD (Create, Read, Update, Delete) para usuários em uma aplicação. A API utiliza o banco de dados Postgres e é executada no Node.js dentro de um contêiner Docker. A biblioteca Sequelize é utilizada para criar as migrações e realizar as operações de CRUD.

## Tecnologias

As principais tecnologias utilizadas neste projeto são:

- Node.js: Uma plataforma de desenvolvimento JavaScript baseada no motor V8 do Google Chrome.
- Postgres: Um sistema de gerenciamento de banco de dados relacional.
- Docker: Uma plataforma que permite empacotar e distribuir aplicativos em contêineres.
- Sequelize: Uma biblioteca Node.js que facilita a interação com bancos de dados SQL.

## Instalação

Para executar a API em sua máquina local, siga as etapas abaixo:

1. Certifique-se de ter o Docker instalado em sua máquina.
2. Clone este repositório em seu ambiente local.
3. Navegue até o diretório raiz do projeto e digite o comando abaixo para instalar os pacotes do node:

    ```npm install```

4. Execute o seguinte comando para criar e iniciar o contêiner Docker:

     ```sudo docker compose up```

5. Aguarde até que o contêiner esteja em execução e todos os pacotes necessários sejam instalados.

## Uso

Após a instalação e execução bem-sucedidas, a API estará disponível em `http://localhost:3000`.

A API suporta as seguintes operações:

- **Create**: Crie um novo usuário enviando uma solicitação POST para `/users`.
- **Read**: Obtenha informações de um usuário específico enviando uma solicitação GET para `/users/:id`.
- **Update**: Atualize as informações de um usuário existente enviando uma solicitação PUT para `/users/:id`.
- **Delete**: Exclua um usuário existente enviando uma solicitação DELETE para `/users/:id`.

Certifique-se de substituir `:id` pelo ID real do usuário ao fazer operações de leitura, atualização e exclusão.

<!-- ## Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch com sua contribuição: `git checkout -b minha-contribuicao`.
3. Realize as alterações e faça commits: `git commit -m "Minha contribuição"`.
4. Faça push para o repositório remoto: `git push origin minha-contribuicao`.
5. Abra um pull request no repositório original. -->

<!-- ## Licença

Este projeto está licenciado sob a [Nome da Licença]. Consulte o arquivo LICENSE para obter mais informações.

## Contato

Para obter mais informações ou entrar em contato, você pode enviar um e-mail para [seu e-mail] ou [informações de contato adicionais]. -->

