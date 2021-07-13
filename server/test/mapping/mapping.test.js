const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);

// Mapping Config
describe('GET /api/specification/mapping', () => {
  it('Should return 200 status code', async () => {
    const res = await request.get('/api/specification/mapping');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      'swagger_2': ['openapi_3',]
    });
  });
}); 