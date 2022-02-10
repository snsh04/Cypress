/// <reference types="Cypress" />

describe('My First Test', () =>
  {
      // Open woolies page 
    it('Visit Woolies', () => 
    {
      cy.visit("https://www.woolworths.com.au/");
    
      });
        // 
      it('Search for grapes', () => 
      {
       cy.get('.autocomplete-searchBar').type('grapes{enter}')
      
        });
    })

  
  