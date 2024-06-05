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

it('Homepage - Search - Verify single search and result ', () => {
    cy.visit('/')
    const createObj = new Objects

    // Type in search term, submit
    createObj.testObjects.search().type('QA TEST')
    cy.get('form').submit()


    // Verify search result
    cy.get('div[data-q="What is QA in testing?"]', { timeout: 60000 }).click()
   
  })