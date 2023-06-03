// Teste que para enviar uma solicitação GET para a raiz do aplicativo e, em seguida, verificando se a resposta é 200
// Autor: Marcos Rodrigo Mendes Saavedra
// Data: 28/05/2023
// contato: marcos.saavedra@icen.ufpa.br


// para execução do erro instalar o jest e  o supertest com npm install --save-dev jest e o npm install --save-dev supertest
// para rodar o teste alterar a linha "command: npm start" no docker-compose.yml para "command: npm test" 

const request = require('supertest');
const app = require('../src/app');
const express = require("express");

describe('Testes do aplicativo', () => {
  it('Deve receber um Json com os dados das Linhas', async () => {
    const response = await request(app).get('/busRoutes');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });
});

// função a ser testada
function setupApp() {
  const app = express();
  app.use(express.json());
  return app;
}

// teste de unidade
describe('Teste do middleware express.json()', () => {
  it('deve adicionar o middleware de análise de JSON ao aplicativo', () => {
    // Arrange (preparação)
    const app = setupApp();

    // Act (execução)
    const middlewareStack = app._router.stack;

    // Assert (verificação)
    const jsonParserMiddleware = middlewareStack.find(layer => layer.name === 'jsonParser');
    expect(jsonParserMiddleware).toBeDefined();
  });
});