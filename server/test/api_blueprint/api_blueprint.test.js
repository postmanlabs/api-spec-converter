const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);

const jsonResponse1 = require('./data/output/jsonResponse1.json');
const {yamlResponse1} = require('./data/output/yamlResponses');


describe('POST /api/specification/api_blueprint/openapi_3', () => {
  //API Blueprint to OpenAPI 3 (JSON)
  it('should convert api_blueprint to openapi_3 (json) ', async () => {
    const res = await request
      .post('/api/specification/api_blueprint/openapi_3')
      .attach('file', 'test/api_blueprint/data/input/api_blueprint.apib');
    expect(res.status).toBe(200);
    expect(JSON.parse(res.text)).toEqual(jsonResponse1);
    expect(res.body).toEqual({});
  });

  //API Blueprint to OpenAPI 3 (YAML)
  it('should convert api_blueprint to openapi_3 (yaml) ', async () => {
    const res = await request
      .post('/api/specification/api_blueprint/openapi_3')
      .attach('file', 'test/api_blueprint/data/input/api_blueprint.apib')
      .query({'targetSyntax': 'yaml'});
    expect(res.status).toBe(200);
    expect(res.text).toEqual(yamlResponse1);
    expect(res.body).toEqual({});
  });

  //API Blueprint to OpenAPI 3 (JSON) - Download JSON Response
  it('should convert api_blueprint to openapi_3 (json) and download json response', async () => {
    const res = await request
      .post('/api/specification/api_blueprint/openapi_3')
      .attach('file', 'test/api_blueprint/data/input/api_blueprint.apib')
      .query({'toFile': true});
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toEqual('application/json; charset=UTF-8');
    expect(res.headers['content-disposition']).toEqual('attachment; filename="api_blueprint.json"');
  });

  //API Blueprint to OpenAPI 3 (YAML) - Download YAML Response
  it('should convert api_blueprint to openapi_3 (yaml) and download yaml response', async () => {
    const res = await request
      .post('/api/specification/api_blueprint/openapi_3')
      .attach('file', 'test/api_blueprint/data/input/api_blueprint.apib')
      .query({'targetSyntax': 'yaml', 'toFile': true});
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toEqual('text/yaml; charset=UTF-8');
    expect(res.headers['content-disposition']).toEqual('attachment; filename="api_blueprint.yaml"');
  });
});