// Testes de API com Cypress

< references types="Cypress" />

const faker = require('faker');

describe('Create Project', () => {
    it('successfully', () => {
        const project = {
            name: `project-${faker.rancom.uuid()}`,
            description: faker.random.words(5)
        }
        cy.api_createProject(project)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(project.name)
                expect(response.body.description).to.equal(project.description)
            })
    })
})