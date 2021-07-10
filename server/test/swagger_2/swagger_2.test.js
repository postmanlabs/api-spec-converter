const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

jest.setTimeout(30000)

describe('POST /api/specification/swagger_2/openapi_3', () => {
  //Swagger 2 (JSON) to OpenAPI 3 (JSON)
  it('should convert swagger_2 (json) to openapi_3 (json) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.json')
    expect(res.status).toBe(200)
    expect(res.text).not.toBeNull()
    expect(res.body).toEqual({})
  })

  //Swagger 2 (JSON) to OpenAPI 3 (YAML)
  it('should convert swagger_2 (json) to openapi_3 (yaml) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.json')
      .query({'syntax': 'yaml'})
    expect(res.status).toBe(200)
    expect(res.text).not.toBeNull()
    expect(res.body).toEqual({})
  })

  //Swagger 2 (YAML) to OpenAPI 3 (JSON)
  it('should convert swagger_2 (yaml) to openapi_3 (json) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.yaml')
    expect(res.status).toBe(200)
    expect(res.text).not.toBeNull()
    expect(res.body).toEqual({})
  })

  //Swagger 2 (YAML) to OpenAPI 3 (YAML)
  it('should convert swagger_2 (yaml) to openapi_3 (yaml) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.yaml')
      .query({'syntax': 'yaml'})
    expect(res.status).toBe(200)
    expect(res.text).not.toBeNull()
    expect(res.body).toEqual({})
  })

  //Swagger 2 (JSON) to OpenAPI 3 (JSON) - JSON Response
  it('should convert swagger_2 (json) to openapi_3 (json) and give json response', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.json')
      .query({'toFile': true})
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toEqual('application/json; charset=UTF-8')
  })

  //Swagger 2 (JSON) to OpenAPI 3 (JSON) - YAML Response
  it('should convert swagger_2 (json) to openapi_3 (yaml) and give json response', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/swagger_2.json')
      .query({'syntax': 'yaml', 'toFile': true})
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toEqual('text/yaml; charset=UTF-8')
  })
})