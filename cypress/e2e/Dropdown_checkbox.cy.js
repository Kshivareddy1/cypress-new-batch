describe("dropdown_checkbox_Radiobutton", () => {
    it("validate the inputbox", () => {
        // visit the url
        cy.visit("https://register.rediff.com/register/register.php")

        // type the input field
        cy.get('input[name^="name"]').type("username")
        // cy.get('[value="Check availability"]').click()
        cy.get('[type="button"]').eq(0).click()

        // selecting the checkbox
        cy.get('[type="checkbox"]').check()
        cy.wait(5000)                                                //1sec = 1000ms
        cy.get('[type="checkbox"]').uncheck()

        // cy.get('[type="checkbox"]').click()
        // select the dropdown 
        // 1st method selecting 'text'
        cy.get('select[name^="DOB_Day"]').select('01')

        // by using text
        // cy.get('[name^="DOB_Month"]').select('JAN')

        // by using value
        cy.get('[name^="DOB_Month"]').select('01')

        //  by using index
        cy.get('[name^="DOB_Month"]').select(2)

        // handling radio button
        cy.get('[value="f"]').check()

    })
})