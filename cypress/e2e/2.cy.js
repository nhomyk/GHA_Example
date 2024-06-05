import Objects from '/cypress/POM/objects.js'
beforeEach(() => {

  cy.session('login', () => {

  })
});

it('Homepage - Assert load', () => {
  cy.request({
  url: 'http://google.com',
}).then((resp) => {
  // status code is 200
  expect(resp.status).to.eq(200)
})
})