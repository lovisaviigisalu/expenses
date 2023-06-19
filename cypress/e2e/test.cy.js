 describe('template spec', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3002/')
  })

 it('should add expense', () => {
     cy.contains("Add expense").click()
     cy.get('form input[type="text"]').type('New pen')
     cy.get('form input[type="number"]').type('9.99')
     cy.get('form input[type="date"]').type('2023-10-10')
     cy.get('button[type="submit"]').click()
     cy.get(".expense-item").should('have.length', 1)
 });
     it('should filter expenses by value 2024', () => {
         cy.get('.expenses-filter select').select(1)
         cy.get('.expense-item').should('have.length', 2)
     });
     it('should not contain expenses by value 2025', () => {
         cy.get('.expenses-filter select').select(0)
         cy.get('.expense-item').should('have.length', 0)
     })

 })
