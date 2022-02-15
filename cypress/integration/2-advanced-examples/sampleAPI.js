/// <reference types="Cypress" />


describe('GEt link member and validate fields for planCodeTest', () =>
  {
    let data;
    before(() => {
      cy.fixture('testdata').then((fData) => {
          data = fData;
      });
    });


    const authToken = process.env.TOKEN
    it('Check if response retuens json with 200', () => 
    {
      cy.request({
        method : 'GET',
        url : data.url,
        headers : {
          Authorization : authToken,
          Accept : "application/json"
        },    
    }).then(function(response){

      expect(response.status).to.eq(200)
    });

    })

  })


 
