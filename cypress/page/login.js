class login{
// userName(){
//     return  cy.get('[name="username"]')
// }
userName(){
    return  cy.xpath('//input[@name="username"]')
}
password(){
    return   cy.get('[type="password"]')//   cy.xpath("locator")
}
button(){
    return  cy.get('[type="submit"]')
}

loginHeader(){
    return cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
}

}
export default login;