const handlers = require('../handlers')

test('homepage renders', () => {
  const req = {}
  const res = { render: jest.fn() }
  handlers.homepage(req, res)
  expect(res.render.mock.calls[0][0]).toBe('homepage')
})

test('about page renders with fortune message', () => {
  const req = {}
  const res = { render: jest.fn() }
  handlers.aboutPage(req, res)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('pages/about')
  expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
    fortune: expect.stringMatching(/\W/)
  }))
})

test('404, notFound, handler renders', () => {
  const req = {}
  const res = { render: jest.fn() }
  handlers.notFound(req, res)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('shared/notFound')
})

test('500 handler renders', () => {
  const err = new Error('some error')
  const req = {}
  const res = { render: jest.fn() }
  const next = jest.fn()
  handlers.serverError(err, req, res, next)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('shared/serverError')
})
