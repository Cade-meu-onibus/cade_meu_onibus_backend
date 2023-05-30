// Teste que para enviar uma solicitação GET para a raiz do aplicativo e, em seguida, verificando se a resposta é 200
// Autor: Marcos Rodrigo Mendes Saavedra
// Data: 28/05/2023
// contato: marcos.saavedra@icen.ufpa.br


// para execução do erro instalar o jest e  o supertest com npm install --save-dev jest e o npm install --save-dev supertest
// para rodar o teste alterar a linha "command: npm start" no docker-compose.yml para "command: npm test" 
const request = require('supertest');
const app = require('../src/app');

describe('Testes do aplicativo', () => {
  it('Deve receber um Json com os dados das Linhas', async () => {
    const response = await request(app).get('/busRoutes');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });
});
