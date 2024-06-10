it('Assert 200', () => {
  cy.request({
  url: 'http://google.com',
}).then((response) => {
  expect(response.status).to.eq(200)    


})
})