
///<reference types= "Cypress"/>

it('by ID', () => {

        cy.visit("https://www.facebook.com/")
        cy.get("#email")
    })

    it('by Class', () => {

        cy.visit("https://docs.cypress.io/examples/examples/tutorials.html#2-Text-inputs")
        cy.get(".ds-input")
    })   

    it('by Tag', () => {

        cy.visit("https://docs.cypress.io/examples/examples/tutorials.html#2-Text-inputs")
        cy.get("nav")
    })  

    it('by Tag value' , () => {

        cy.visit("https://www.facebook.com/")
        cy.get('[name="pass"]')
    })  

    it('by different Types ' , () => {

        cy.visit("https://www.facebook.com/")
        cy.get('[name="pass"][type="password"]')
    })  

    it.only('by Contains Name ' , () => {

        cy.visit("https://next.privat24.ua/")
        cy.get('*[class^="card"]')
    })  
 
       it.only('using Get with Find and Eq' , () => {

            cy.visit("https://next.privat24.ua/deposit/open")
            cy.get("tbody").find("td").find("div").find("button").eq(0)
     })  