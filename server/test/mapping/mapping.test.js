const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

// Mapping Config
describe('GET /mapping', () => {
  it('Should return 200 status code', async () => {
    const res = await request.get('/mapping')
    expect(res.status).toBe(200)
  })
})