describe('Testing the order form', () => {

    it('Go to the page', () => {
        cy.visit('http://localhost:3000/order');
    })

    it('Check if submit is disabled', () => {
        cy.contains('Add to order')
          .should('be.disabled');
    });


    it('Select sauce', () => {
        cy.contains('Barbeque sauce')
            .click()
    });

    it('Select toppings', () => {
        cy.contains('Bell pepper')
            .click()
    });

    it('Check name', () => {
        cy.get('#name')
            .type('Mi')
            .wait(2000);
        
        cy.get('.alert-danger');

        cy.get('#name')
            .clear()
            .type('chael Jackson');
    });

    it('Special instructions', () => {
        cy.get('#instructions')
            .type('Please add more pepper');
    });

    it('Check if submit is enabled', () => {
        cy.contains('Add to order')
          .should('be.enabled');
    });

    it('Submit', () => {
        cy.contains('Add to order')
            .click();
    });

});