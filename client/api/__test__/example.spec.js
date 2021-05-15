const app = require('../server') // Link to server file
const supertest = require('supertest')
const request = supertest(app)


// Jest cheat sheet: https://devhints.io/jest

it('gets the test endpoint', async done => {
  const response = await request.get('/home')

  expect(response.status).toBe(200)
  done()
})
