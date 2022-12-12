const request = require('supertest')
const app = require('../src/app')

// This should pass
describe('this test should pass', () => {
  // define input
  test('expect true to be true', () => {
    const expectedOutput = true
    // define output
    expect(true).toBe(true)
  })
})

// This should fail
describe('This test should fail', () => {
  // define input
  test('expect true to be false', () => {
    const expectedOutput = true
    const actualOutput = false
    // define output
    expect(actualOutput).toBe(expectedOutput)
  })
})
