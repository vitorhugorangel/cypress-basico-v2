
< references types="Cypress" />

const acessToken = Cypress.env('gitlab_acess_token')

Cypress.Commands.add('api_createProject', project => {
    cy.request({
        method: 'POST',
        url: `api/v4/projects/?private_token=${accessToken}`,
        body: {
            name: project.name,
            description: project.ndescription,
            initialize_with_readme: true,
        }
    })
})