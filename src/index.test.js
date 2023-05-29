// Teste que para enviar uma solicitação GET para a raiz do aplicativo e, em seguida, verificando se a resposta é 200
// Autor: Marcos Rodrigo Mendes Saavedra
// Data: 28/05/2023
// contato: marcos.saavedra@icen.ufpa.br


// para execução do erro instalar o jest e  o supertest com npm install --ssave-dev jest e o npm install --save-dev supertest
// por fom rodar o teste com npm run test
const request = require('supertest');
const app = require('../src/server');

describe('Testes do aplicativo', () => {
  it('deve iniciar o aplicativo corretamente', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('running node app teste');
  });
});
