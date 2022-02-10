/// <reference types="Cypress" />

describe('My First Test', () =>
  {
      // Open kmart and test with only visble items
    it('Visit kmart and test with only visible items', () => 
    {
      cy.visit("https://www.target.com/");
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
      cy.get('.searchInputForm').type('onion')
      cy.get('[data-test="btnSearch"]').click()
      cy.get('.Col-sc-favj32-0.epICLY.h-padding-a-none.h-display-flex:visible').should('have.length', 28)
    
      });
 
        
    })

  
  