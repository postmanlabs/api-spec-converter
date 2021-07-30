const supertest = require('supertest');

const app = require('../../../app');
const request = supertest(app);

const jsonResponse1 = require('./data/output/jsonResponse1.json');
const jsonResponse2 = require('./data/output/jsonResponse2.json');
const { yamlResponse1, yamlResponse2 } = require('./data/output/yamlResponses');

describe('POST /api/specification/swagger_2/openapi_3', () => {
  //Swagger 2 (JSON) to OpenAPI 3 (JSON)
  it('should convert swagger_2 (json) to openapi_3 (json)', (done) => {
    request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/converterRouter/swagger_2/data/input/swagger_2.json')
      .end((err, res) => {
        if(err) throw err;
        expect(res.status).toBe(200);
        expect(JSON.parse(res.text)).toEqual(jsonResponse1);
        expect(res.body).toEqual({});
        done();
      });
  });

  //Swagger 2 (JSON) to OpenAPI 3 (YAML)
  it('should convert swagger_2 (json) to openapi_3 (yaml)', (done) => {
    request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/converterRouter/swagger_2/data/input/swagger_2.json')
      .query({'targetSyntax': 'yaml'})
      .end((err, res) => {
        if(err) throw err;
        expect(res.status).toBe(200);
        expect(res.text).toEqual(yamlResponse1);
        expect(res.body).toEqual({});
        done();
      });
  });

  //Swagger 2 (YAML) to OpenAPI 3 (JSON)
  it('should convert swagger_2 (yaml) to openapi_3 (json)', (done) => {
    request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/converterRouter/swagger_2/data/input/swagger_2.yaml')
      .end((err, res) => {
        if(err) throw err;
        expect(res.status).toBe(200);
        expect(JSON.parse(res.text)).toEqual(jsonResponse2);
        expect(res.body).toEqual({});
        done();
      });
  });

  //Swagger 2 (YAML) to OpenAPI 3 (YAML)
  it('should convert swagger_2 (yaml) to openapi_3 (yaml)', (done) => {
    request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/converterRouter/swagger_2/data/input/swagger_2.yaml')
      .query({'targetSyntax': 'yaml'})
      .end((err, res) => {
        if(err) throw err;
        expect(res.status).toBe(200);
        expect(res.text).toEqual(yamlResponse2);
        expect(res.body).toEqual({});
        done();
      });
  });

  //Swagger 2 (JSON) to OpenAPI 3 (JSON) - Download JSON Response
  it('should convert swagger_2 (json) to openapi_3 (json) and download json response', (done) => {
    request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/converterRouter/swagger_2/data/input/swagger_2.json')
      .query({'toFile': true})
      .buffer()
      .parse((res, callback) => {
        res.setEncoding('binary');
        res.data = '';
        res.on('data', (chunk) => {
          res.data += chunk;
        });
        res.on('end', () => {
          return callback(null, Buffer.from(res.data, 'binary'));
        });
      })
      .end((err, res) => {
        if(err) throw err;
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toEqual('application/json; charset=UTF-8');
        expect(res.headers['content-disposition']).toEqual('attachment; filename="swagger_2.json"');
        expect(JSON.parse(res.body)).toEqual(jsonResponse1);
        done();
      });
  });

  //Swagger 2 (JSON) to OpenAPI 3 (YAML) - Download YAML Response
  it('should convert swagger_2 (json) to openapi_3 (yaml) and download yaml response', (done) => {
    request
      .post('/api/specification/swagger_2/openapi_3')
      .attach('file', 'test/converterRouter/swagger_2/data/input/swagger_2.json')
      .query({'targetSyntax': 'yaml', 'toFile': true})
      .buffer()
      .parse((res, callback) => {
        res.setEncoding('binary');
        res.data = '';
        res.on('data', (chunk) => {
          res.data += chunk;
        });
        res.on('end', () => {
          return callback(null, Buffer.from(res.data, 'binary'));
        });
      })
      .end((err, res) => {
        if(err) throw err;
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toEqual('text/yaml; charset=UTF-8');
        expect(res.headers['content-disposition']).toEqual('attachment; filename="swagger_2.yaml"');
        expect(res.body.toString()).toEqual(yamlResponse1);
        done();
      });
  });
});