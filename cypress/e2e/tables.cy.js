///<reference types="cypress"/>

describe('Automation - Working With Tables in webpage', function () {

    it('Cypress Test Case - Understanding Tables in webpage', function () {


        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices');
        cy.xpath('//table').should('have.length', '2')

        //How many rows 
        cy.xpath('//table[@class="dataTable"]/tbody/tr').should('have.length', '30');

        //How many column 
        cy.xpath('//table[@class="dataTable"]/thead/tr/th').should('have.length', '6');


        cy.xpath('//table[@class="dataTable"]/tbody/tr[1]/td[6]').then((txt) => {

            var percentageofchange = txt.text()

            expect(percentageofchange).to.equal("-0.07")

        })
        //Get row data and Validate column text

        cy.xpath('//table[@class="dataTable"]/tbody/tr[4]').within(() => {

            cy.get('td').eq(3).then((ele) => {

                var text = ele.text()

                cy.log(text)

                expect(text).to.equal("1586.30")
            })

            cy.get('td').eq(0).should('contain.text', 'Bajaj Finserv Ltd.')

        })



        //         //Validate data based on Cell Values 

        cy.get('.dataTable >tbody').contains('HDFC Bank Ltd').parent().parent().within(() => {

            cy.get('td').eq(3).then((ele) => {

                cy.log("Prev price: " + ele.text())
            })
        })


        cy.get('.dataTable >tbody').contains('ICICI Bank Ltd').parent().parent().within(() => {

            cy.get('td').eq(3).then((ele) => {

                cy.log("Prev price: " + ele.text())
            })
        })


        cy.get('.dataTable >tbody').contains('Infosys Ltd').parent().parent().within(() => {

            cy.get('td').eq(3).then((ele) => {

                cy.log("Prev price: " + ele.text())
            })
        })

        //   // Get entire Table Data
        var total;
        cy.get('.dataTable> tbody > tr >td:nth-child(4)')
            .each((col) => {

                cy.wrap(col).within((celldata) => {

                    var x = celldata.text()
                    var y = Number(x)

                    total = total + y

                })
            })

        cy.log(total)



        cy.get('.dataTable> tbody > tr').each((rows) => {

            cy.wrap(rows).within((celldata) => {

                cy.log(celldata.text())

            })
        })

    })
    // it('', () => {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     // cy.get('')
    //     cy.get('.brand').invoke('text').then((txt) => {

    //         cy.log(txt)
    //     })
    // })

})
