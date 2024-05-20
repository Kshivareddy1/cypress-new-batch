describe("Login functionality",()=>{
    beforeEach(function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      });
    it("verify the login Header",()=>{
        
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login')
    
    })
    it(" verify the login credientials with valid username and valid password",()=>{
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // // cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login')

        cy.get('[placeholder="Username"]').type('admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.contains('Time at Work').should('have.text','Time at Work')
        cy.url().should('include','dashboard')

    
    })
})







// describe('login functionality',function (){
//     it('',()=>{
    
//     }) 
//     it('',()=>{
    
//     })
//     it('',()=>{
    
//     })
//     it('',()=>{
    
//     })
// })