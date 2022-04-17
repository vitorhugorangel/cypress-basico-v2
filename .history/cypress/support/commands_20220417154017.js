Cypress.Commands.add('FillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Vitor Hugo')
    cy.get('#lastName').type('Rangel')
    cy.get('#email').type('vitor@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
})
