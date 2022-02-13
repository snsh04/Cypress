/// <reference types="Cypress" />

describe('GEt link member and validate fields for planCodeTest', () =>
  {
    let data;
    before(() => {
      cy.fixture('testdata').then((fData) => {
          data = fData;
      });
    });
    
    var auth = process.env.AUTHORIZATION;
    console.log(auth)
    it('Check if response retuens json with 200', () => 
    {
      cy.request({
        method : 'GET',
        url : data.url,
        headers : {
          Authorization : auth,
          Accept : "application/json"
        },    
    }).then(function(response){

      expect(response.status).to.eq(200)
    });

    })

  })


 
