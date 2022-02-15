/// <reference types="Cypress" />


describe('GEt link member and validate fields for planCodeTest', () =>
  {
    let data;
    before(() => {
      cy.fixture('testdata').then((fData) => {
          data = fData;
      });
    });


    let authToken = process.env.TOKEN
    console.log(authToken)
    it('Check if response retuens json with 200', () => 
    {
      cy.request({
        method : 'GET',
        url : data.url,
        headers : {
          Authorization : 'Bearer ' + authToken,
          Accept : "application/json"
        },    
    }).then(function(response){

      expect(response.status).to.eq(200)
    });

    })

  })


 
