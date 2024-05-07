import login from "../page/login"
import example from "../fixtures/example.json"
const Login = new login();
describe("test suit",()=>{
    it("test suit",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{ failOnStatusCode: false})
        Login.userName().type(example.admin[0].validCredential[1].userName)
        // password
        Login.password().type(example.admin[0].validCredential[1].password)
    
        //login button
        Login.button().click()
    })
})