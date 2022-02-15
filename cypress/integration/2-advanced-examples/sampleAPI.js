/// <reference types="Cypress" />
require('dotenv').config();

describe('GEt link member and validate fields for planCodeTest', () =>
  {
    let data;
    before(() => {
      cy.fixture('testdata').then((fData) => {
          data = fData;
      });
    });
    console.log('test')

    let token = Cypress.env('Auth')
    it('Check if response retuens json with 200', () => 
    {
      cy.request({
        method : 'GET',
        url : data.url,
        headers : {
          Authorization : 'Bearer '+ token,
          Accept : "application/json"
        },    
    }).then(function(response){

      expect(response.status).to.eq(200)
    });

    })

  })


 
