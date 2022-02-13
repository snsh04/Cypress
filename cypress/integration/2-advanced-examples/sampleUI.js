/// <reference types="Cypress" />

describe('My First Test', () =>
  {
      // Open kmart and test with only visble items
    it('Visit target and test with only visible items', () => 
    {
      cy.visit("https://www.target.com/");
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  
     // cy.get('.Col-sc-favj32-0.epICLY.h-padding-a-none.h-display-flex:visible').eq(2).contains('Add for shipping').click()

      // array 

      // check box selector 

     // cy.get('[data-test="checkboxShippingFacet"] > .styles__CheckboxWrap-sc-1v63imw-3 > .styles__CheckboxVisual-sc-1v63imw-5').click().should('be.checked')
     //.and('have.value','Shipping')

    //  cy.get('Input[type="button"]').check(['Shipping'])

    // static drop down

   // cy.get('#pickupAndDelivery > .ArrowSprite-sc-w7d9ld-0').click()     
   // cy.contains('Order Pickup').click({force: true})              
    

    // dynamic drop down
    //cy.get('#search').type('oni')
    //cy.get('TypeaheadItem-sc-1bhe8wi-0 gYhTpg').each(($e1, index, $list) => {

     // if($e1.text === 'onion'){

      //  $e1.click()
     // }
    //})

     //  cy.get('.searchInputForm').type('onion')
     //cy.get('[data-test="btnSearch"]').click()
    //  cy.get('.Col-sc-favj32-0.epICLY.h-padding-a-none.h-display-flex:visible').should('have.length', 28)
     // pop ups are automatically handled.
     // cy.contains('Add for shipping').click()




    })
  })


 
