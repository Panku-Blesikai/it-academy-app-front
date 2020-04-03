import {TestData} from "../support/test-data/test-data";

describe('buying an item test', () => {

    const testData = new TestData();

    beforeEach(()=>{
        cy.visit('');
    });

    it('main test', () => {
        cy.get('[role="button"]').first().click();
        cy.get('[type="Submit"]').click();
        cy.get('[type="Submit"]').click();
        cy.get('[type="link"]').eq(0).click();
        cy.get('[sw-icon="payments-transfers"]').click();
        cy.contains('span','BankGiro/PlusGiro').click();
        cy.contains('span','Add').click();
        cy.get('[name="recipientTypes"]').select('PlusGiro');
        cy.get('#pgAccountNumber').type('12345');
        cy.contains('span','Fetch name').click();
        cy.get('.swed-button-group_container > [ng-show="$ctrl.showAddButton()"]').click();
        cy.get('#response').type('44555555');
        cy.get('widget-signing-security-token > form.ng-pristine > swed-button-group > ._align-space-between-stretch > .swed-button-group_container > .swed-button').click();
        cy.get('[ng-if="$ctrl.isSigned"] > swed-button-group > ._align-space-between-stretch > .swed-button-group_container > .swed-button').click();
    });

});
