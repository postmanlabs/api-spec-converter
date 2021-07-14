const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);

const jsonResponse1 = require('./data/output/jsonResponse1.json')
const jsonResponse2 = require('./data/output/jsonResponse2.json')
const { yamlResponse1, yamlResponse2 } = require('./data/output/yamlResponses')

// jsonResponse.replace(/\\"/g, '"');
jest.setTimeout(30000);

describe('POST /api/specification/swagger_2/openapi_3', () => {
  //Swagger 2 (JSON) to OpenAPI 3 (JSON)
  it('should convert swagger_2 (json) to openapi_3 (json) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/input/swagger_2.json');
    expect(res.status).toBe(200);
    expect(JSON.parse(res.text)).toEqual(jsonResponse1)
    expect(res.body).toEqual({});
  });

  //Swagger 2 (JSON) to OpenAPI 3 (YAML)
  it('should convert swagger_2 (json) to openapi_3 (yaml) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/input/swagger_2.json')
      .query({'syntax': 'yaml'});
    expect(res.status).toBe(200);
    expect(res.text).toEqual(yamlResponse1)
    expect(res.body).toEqual({});
  });

  //Swagger 2 (YAML) to OpenAPI 3 (JSON)
  it('should convert swagger_2 (yaml) to openapi_3 (json) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/input/swagger_2.yaml');
    expect(res.status).toBe(200);
    expect(JSON.parse(res.text)).toEqual(jsonResponse2)
    expect(res.body).toEqual({});
  });

  //Swagger 2 (YAML) to OpenAPI 3 (YAML)
  it('should convert swagger_2 (yaml) to openapi_3 (yaml) ', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/input/swagger_2.yaml')
      .query({'syntax': 'yaml'});
    expect(res.status).toBe(200);
    expect(res.text).toEqual(yamlResponse2)
    expect(res.body).toEqual({});
  });

  //Swagger 2 (JSON) to OpenAPI 3 (JSON) - Download JSON Response
  it('should convert swagger_2 (json) to openapi_3 (json) and download json response', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/input/swagger_2.json')
      .query({'toFile': true});
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toEqual('application/json');
    expect(res.headers['content-disposition']).toEqual('attachment; filename="swagger_2.json"');
  });

  //Swagger 2 (JSON) to OpenAPI 3 (JSON) - Download YAML Response
  it('should convert swagger_2 (json) to openapi_3 (yaml) and download yaml response', async () => {
    const res = await request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/swagger_2/data/input/swagger_2.json')
      .query({'syntax': 'yaml', 'toFile': true});
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toEqual('text/yaml');
    expect(res.headers['content-disposition']).toEqual('attachment; filename="swagger_2.yaml"');
  });
});