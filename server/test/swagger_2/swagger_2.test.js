const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

jest.setTimeout(30000)

describe('POST /api/specification/:format/:convertTo', () => {
  //Swagger 2 (JSON) to OpenAPI 3 (JSON)
  it('should convert swagger_2 (json) to openapi_3 (json) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.json')
    expect(res.status).toBe(200)
    expect(typeof res.body.spec).toBe('object')
  })

  //Swagger 2 (JSON) to OpenAPI 3 (YAML)
  it('should convert swagger_2 (json) to openapi_3 (yaml) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.json')
      .query({'syntax': 'yaml'})
    expect(res.status).toBe(200)
    expect(typeof res.body.spec).toBe('string')
  })

  //Swagger 2 (YAML) to OpenAPI 3 (JSON)
  it('should convert swagger_2 (yaml) to openapi_3 (json) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.yaml')
    expect(res.status).toBe(200)
    expect(typeof res.body.spec).toBe('object')
  })

  //Swagger 2 (YAML) to OpenAPI 3 (YAML)
  it('should convert swagger_2 (json) to openapi_3 (json) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.yaml')
      .query({'syntax': 'yaml'})
    expect(res.status).toBe(200)
    console.log(res)
    expect(typeof res.body.spec).toBe('string')
  })
})