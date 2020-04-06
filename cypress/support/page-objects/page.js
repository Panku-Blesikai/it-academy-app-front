// import {TestData} from "../test-data/test-data";
//
// const testData = new TestData();
//
// export class Page {
//     typeIntoInput(id, data){
//         cy.get(id).type(data);
//     }
//     clickOn(id){
//         cy.get(id).click();
//     }
//     get alertSuccess(){
//         return cy.get('.alert-success');
//     }
//     unSuccessCase(){
//         cy.get('.alert-success').should('not.exist');
//     }
// }
export class Page {
  typeIntoInput(id, testData) {
    cy.get(`${id}`).type(testData);
    this.checkIfSubmitIsNotAllowed();
  }

  clickRegisterButton() {
    cy.contains("REGISTRACIJA").click();
  }

  clickButton(id) {
    cy.get(`${id}`).click();
  }

  checkGDPR() {
    cy.get("#gdpr").check();
  }

  submitForm() {
    cy.get('[type="submit"]').click();
  }

  checkIfContains(testData) {
    cy.contains(`${testData}`);
  }

  isAlertDanger(testId) {
    cy.get(`${testId}`).should("be.visible");
  }

  checkIfSubmitIsNotAllowed() {
    cy.get('[type="submit"]').should('be.disabled');
  }
}
