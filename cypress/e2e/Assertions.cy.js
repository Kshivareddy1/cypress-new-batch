describe("dropdown_checkbox_Radiobutton", () => {
    it("validate the inputbox", () => {
        // visit the url
        cy.visit("https://register.rediff.com/register/register.php")

        // assert the table element
        cy.get('[id="tblcrtac"]').should('have.id', 'tblcrtac')
        cy.get('[id="tblcrtac"]').should('have.class', 'f14')

        // type the input field
        cy.contains('Full Name').should('have.text', 'Full Name')

        // verify the assertion with expect
        cy.get('[name^="DOB_Month"] [value="02"]').then((txt) => {
            let x = txt.text();
            cy.log(x)
            expect(x).to.equal('FEB')
        })

        // cy.get('[name^="DOB_Month"] [value="02"]').then((elelength) => {
        //     var lengthcount = elelength.text()
        //     cy.log(lengthcount)

        //    // expect(lengthcount).to.equal(698)

        //     // expect(lengthcount).to.be.within(600, 700)
        //   })

        cy.get('input[name^="name"]').type("username")
        // cy.get('[value="Check availability"]').click()
        cy.get('[type="button"]').eq(0).click()
        cy.get('#check_availability > font > b').should('have.text', 'The ID cannot be blank. Please choose your desired ID.')
        // validate by using Expect assertion
        cy.get('#check_availability > font > b').then((txt1) => {
            let y = txt1.text();
            cy.log(y)
            expect(y).to.equal('The ID cannot be blank. Please choose your desired ID.')
        })
        cy.pause()

        // selecting the checkbox
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(5000)                                                //1sec = 1000ms
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')

        // cy.get('[type="checkbox"]').click()
        // select the dropdown 
        // 1st method selecting 'text'
        cy.get('select[name^="DOB_Day"]').select('01').should('have.value', '01')

        // by using text
        // cy.get('[name^="DOB_Month"]').select('JAN')

        // by using value
        cy.get('[name^="DOB_Month"]').select('01').should('have.text', 'Full Name')

        //  by using index
        cy.get('[name^="DOB_Month"]').select(2)

        // handling radio button
        cy.get('[value="f"]').check()

    })
})