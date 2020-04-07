import {TestData} from "../support/test-data/test-data";
import {ContactUsPage} from "../support/page-objects/contact-us-page";

describe('login admin test', () => {

    const testData = new TestData();

    beforeEach(()=>{
        cy.visit('/admin');
    });

    it('main test', () => {

        cy.get('#username').type(testData.username);
        cy.get('#password').type(testData.password);
        cy.contains('PRISIJUNGTI').click();
        cy.get(':nth-child(14) > :nth-child(8) > a').click({force: true});
        // cy.get(':nth-child(14) > :nth-child(8)').click();
        // cy.contains('ATSIJUNGTI').click();
        // cy.get('.icon-plus').click().click();
        // cy.get('#group_1').select('M');
        // cy.get('[name="Submit"]').click();
        // cy.get('[title="Proceed to checkout"]').click();
        // cy.get('[title="Proceed to checkout"]').click({ force: true, multiple: true });
        // cy.get('[name="processAddress"]').click();
        // cy.get('#cgv').check();
        // cy.get('[name="processCarrier"]').click();
        // cy.get('.bankwire').click();
        // cy.contains('span','I confirm my order').click();
        // cy.contains('Your order on My Store is complete.').should('exist');
    });

});
