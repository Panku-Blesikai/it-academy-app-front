import {TestData} from "../test-data/test-data";

const testData = new TestData();

export class Page {
    typeIntoInput(id, data){
        cy.get(id).type(data);
    }
    clickOn(id){
        cy.get(id).click();
    }
    get alertSuccess(){
        return cy.get('.alert-success');
    }
    unSuccessCase(){
        cy.get('.alert-success').should('not.exist');
    }
}