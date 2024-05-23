import testLogin from "../page/testLogin.page"
import testLogin1 from "../fixtures/testLogin1.json"

const login = new testLogin();

describe("test login functionality", () => {
    it(" login with valid username and password", () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        login.userName().type(testLogin1.userName)
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()
        cy.get('.post-title').should('have.text', 'Logged In Successfully')
        cy.title().should('include', 'Logged In Successfully')
        cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/')
        cy.url().should('include', 'logged-in-successfully')
        cy.contains('Log out').click()
        
    })

    it(" login with valid username and invalid password", () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        login.userName().type('student')
        cy.get('input#password').type('Password1234')
        cy.get('button#submit').click()
        cy.get('#error').should('have.text','Your password is invalid!')
        
    })

    it(" login with invalid username and valid password", () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        login.userName().type('studentf')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()
        cy.get('#error').should('have.text','Your username is invalid!')
        
    })
})