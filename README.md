Este é o sétimo desafio proposto pela Escola DNC. Trata-se de uma API projetada em Express e conectada a um Banco de Dados local para a execução de testes.
Caso deseje utilizar este projeto em seu computador, tealize os seguintes passos:

1. Clone o repositório para alguma pasta no seu computador:

    - Com seu editor de código, crie e abra uma nova pasta onde deseja armazenar o projeto.

    - Utilizando o terminal, digite a seguinte instrução: git clone https://github.com/HirukkaPaulo/API-em-Express-e-Typescript-com-testes.git

    - Pronto, o projeto já estará copiado no seu computador.

2. Instale as dependências necessárias:

    Para que o projeto funcione corretamente, é necessário instalar as dependências necessárias. Para isso, siga as instruções a seguir:

    - No terminal, digite: cd .\API-em-Express-e-Typescript-com-testes\
 para entrar na nova pasta criada com os arquivos do projeto.

    - Logo após digite: yarn install ou npm install para instalar as dependências.

    - Aguarde até todas as dependências serem instaladas.

3. Configure a conexão com o Banco de Dados:

    Para que a API conecte-se ao seu Banco de Dados local, é necessário configurar o arquivo de conexão do projeto e criar um Banco de Dados.

    - Crie um Banco de Dados no seu computador com o nome de "alunos".

    - Entre em src/config e clique no arquivo knex.ts.

    - Substitua as informações do knexService pelas informações necessárias para se conectar ao seu Banco de Dados.

    - No terminal, digite npx knex migrate:latest --knexfile ./src/knexfile.ts ou yarn knex migrate:latest --knexfile ./src/knexfile.ts parar criar uma tabela "alunos" com 3 colunas: id (com autopreenchimento), nome e cpf.

4. Rode o projeto no seu computador e inicie os testes:

    - Após ter finalizado as instalações e configurações, utilize o comando npm run dev ou yarn dev para iniciar o seu projeto.

    - Abra um novo terminal e entre novamente na pasta do projeto com o comando cd .\API-em-Express-e-Typescript-com-testes\ .

    - Você pode realizar todos os testes de uma só vez com o comando npm run test ou yarn run test ou realizar algum teste específico com os comandos anteriores e digitando o nome do arquivo de teste logo em seguida. Caso deseje outras formas de filtrar os testes, você pode olhar a documentação de cli do jest aqui: https://jestjs.io/pt-BR/docs/cli .


