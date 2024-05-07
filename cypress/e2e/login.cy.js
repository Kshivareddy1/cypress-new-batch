
describe("validate the login functionality",()=>{

    it.only("verify the login functionality with valid userName and valid password",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{ failOnStatusCode: false})
        // login header
       cy.login()

    })
    it.skip("verify the login functionality with valid userName and valid password",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{ failOnStatusCode: false})
        // login header
       cy.login()
    

    })

   
})

