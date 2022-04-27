describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html');
    })

    it('Verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('Vitor Hugo')
        cy.get('#lastName').type('Rangel')
        cy.get('#email').type('vitor@exemplo.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Vitor Hugo')
        cy.get('#lastName').type('Rangel')
        cy.get('#email').type('vitorhugo.rangel.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('campo telefone continua vazio quando preenchido com valor não-numerico', function () {
        cy.get('#phone')
            .type('yasfayfsya')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Vitor Hugo')
        cy.get('#lastName').type('Rangel')
        cy.get('#email').type('vitorhugo.rangel@exemplo.com')
        cy.get('#phone-checkbox').click();
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .type('Vitor Hugo')
            .should('have.value', 'Vitor Hugo')
            .clear()
            .should('have.value', '')
        // cy.get('#lastName').type('Rangel')
        // cy.get('#email').type('vitorhugo.rangel@exemplo.com')
        // cy.get('#phone-checkbox').click();
        // cy.get('#open-text-area').type('Teste')
        // cy.get('button[type="submit"]').click()
        // cy.get('.error').should('be.visible')
    })
})