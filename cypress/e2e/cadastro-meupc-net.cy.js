describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://meupc.net/')

cy.wait(1000)    
cy.get('.navbar-burger').click()

cy.wait(1000) 
cy.get('ul.menu-list').children('li').children('a[href="https://meupc.net/cadastro"]').click()

cy.get('input[name="nome"]').type('luis f')
cy.get('input[name="email"]').type('luis@teste.com')
cy.get('input[placeholder="Defina uma senha"]').type('12345678')

cy.get('input[type="checkbox"]').check({force:true})

cy.contains('Cadastrar-se').click()
cy.contains('Escolha um nome de ususrio').should('be.visible')







  })
})