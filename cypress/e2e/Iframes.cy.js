describe('',()=>{
    it("handling shadowroots",()=>{

        cy.visit("https://jqueryui.com/checkboxradio/")

        cy.get('iframe[class="demo-frame"]').then((passIframe) =>{

            let checkbox1 = passIframe.contents().find('label[for="checkbox-1"]')
 
            cy.wrap(checkbox1).click()
         })
    })
})