const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

jest.setTimeout(30000)

//Swagger 2 to OpenAPI 3
describe('POST /api/converter/:format/:type/:convertTo', () => {
  it('swagger_2 to openapi_3', async () => {
    const res = await request
      .post('/api/converter/swagger_2/json/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.json')
    expect(res.status).toBe(200)
  })
})
