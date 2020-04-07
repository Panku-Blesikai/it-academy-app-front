/// <reference types='Cypress' />

import { Page } from "../support/page-objects/page";
import { RegistrationFormGoodTestData } from "../support/registration-form-test-data/registration-form-good-data";
import { RegistrationFormBadTestData } from "../support/registration-form-test-data/registration-form-bad-data";
import { RegistrationFormGoodAndFormattedTestData } from "../support/registration-form-test-data/registration-form-data-to-format";

describe("registration form test suite", () => {
  const page = new Page();
  const registrationFormGoodData = new RegistrationFormGoodTestData();
  const registrationFormBadData = new RegistrationFormBadTestData();
  const registrationFormDataToFormat = new RegistrationFormGoodAndFormattedTestData();

  beforeEach("visit", () => {
    cy.visit("");
    expect(true).to.equal(true);
  });

  it("register happy flow", () => {
    page.clickRegisterButton();
    page.typeIntoInput("#name", registrationFormGoodData.name);
    page.typeIntoInput("#surname", registrationFormGoodData.surname);
    page.typeIntoInput("#phone", registrationFormGoodData.phoneNumber);
    page.typeIntoInput("#email", registrationFormGoodData.email);
    page.typeIntoInput("#education", registrationFormGoodData.education);
    page.clickButton("#threePartyAgreementYes");
    page.clickButton("#available14To18Yes");
    page.typeIntoInput(
      "#freeTimeActivity",
      registrationFormGoodData.freeTimeActivity
    );
    page.typeIntoInput("#motivation", registrationFormGoodData.motivation);
    page.typeIntoInput("#experience", registrationFormGoodData.experience);
    page.typeIntoInput(
      "#infoAboutAcademy",
      registrationFormGoodData.infoAboutAcademy
    );
    page.checkGDPR();
    page.clickRegisterButton();
    page.submitForm();
    cy.get('[class="card-title"]').should("exist");
    cy.get('[class="btn btn-secondary"]').click();
    page.checkIfContains(registrationFormGoodData.name);
    page.checkIfContains(registrationFormGoodData.surname);
    page.checkIfContains(registrationFormGoodData.formattedPhoneNumber);
    page.checkIfContains(registrationFormGoodData.email);
    page.checkIfContains(registrationFormGoodData.education);
    page.checkIfContains(registrationFormGoodData.threePartyAgreement);
    page.checkIfContains(registrationFormGoodData.available14To18);
    page.checkIfContains(registrationFormGoodData.freeTimeActivity);
    page.checkIfContains(registrationFormGoodData.motivation);
    page.checkIfContains(registrationFormGoodData.experience);
    page.checkIfContains(registrationFormGoodData.infoAboutAcademy);
  });

  it("not very happy flow", () => {
    page.clickRegisterButton();
    page.typeIntoInput("#name", registrationFormBadData.name);
    page.typeIntoInput("#surname", registrationFormBadData.surname);
    page.typeIntoInput("#phone", registrationFormBadData.phoneNumber);
    page.typeIntoInput("#email", registrationFormBadData.email);
    page.typeIntoInput("#education", registrationFormBadData.education);
    page.clickButton("#threePartyAgreementNo");
    page.typeIntoInput(
      "#threePartyAgreement",
      registrationFormBadData.threePartyAgreementText
    );
    page.clickButton("#available14To18No");
    page.typeIntoInput(
      "#freeTimeActivity",
      registrationFormBadData.freeTimeActivity
    );
    page.typeIntoInput("#motivation", registrationFormBadData.motivation);
    page.typeIntoInput("#experience", registrationFormBadData.experience);
    page.typeIntoInput(
      "#infoAboutAcademy",
      registrationFormBadData.infoAboutAcademy
    );
    page.checkGDPR();
    page.isAlertDanger('[data-testid="name alert-danger"]');
    page.isAlertDanger('[data-testid="surname alert-danger"]');
    page.isAlertDanger('[data-testid="phone alert-danger"]');
    page.isAlertDanger('[data-testid="email alert-danger"]');
    page.isAlertDanger('[data-testid="education alert-danger"]');
    page.isAlertDanger('[data-testid="threePartyAgreement alert-danger"]');
    page.isAlertDanger('[data-testid="freeTimeActivity alert-danger"]');
    page.isAlertDanger('[data-testid="motivation alert-danger"]');
    page.isAlertDanger('[data-testid="experience alert-danger"]');
    page.isAlertDanger('[data-testid="infoAboutAcademy alert-danger"]');
    page.checkIfSubmitIsNotAllowed();
  });

  it("formatting flow", () => {
    cy.get('[class="btn btn-light btn-lg right"]').click();
    cy.get('[class="btn btn-dark btn-lg"]').click();
    page.clickRegisterButton();
    page.typeIntoInput("#name", registrationFormDataToFormat.name);
    page.typeIntoInput("#surname", registrationFormDataToFormat.surname);
    page.typeIntoInput("#phone", registrationFormDataToFormat.phoneNumber);
    page.typeIntoInput("#email", registrationFormDataToFormat.email);
    page.typeIntoInput("#education", registrationFormDataToFormat.education);
    page.clickButton("#threePartyAgreementNo");
    page.typeIntoInput("#threePartyAgreement", registrationFormDataToFormat.threePartyAgreementText);
    page.clickButton("#available14To18Yes");
    page.typeIntoInput(
      "#freeTimeActivity",
      registrationFormDataToFormat.freeTimeActivity
    );
    page.typeIntoInput("#motivation", registrationFormDataToFormat.motivation);
    page.typeIntoInput("#experience", registrationFormDataToFormat.experience);
    page.typeIntoInput(
      "#infoAboutAcademy",
      registrationFormDataToFormat.infoAboutAcademy
    );
    page.checkGDPR();
    page.submitForm();
    cy.get('[class="card-title"]').should("exist");
    cy.get('[class="btn btn-secondary"]').click();
    page.checkIfContains(registrationFormDataToFormat.formattedName);
    page.checkIfContains(registrationFormDataToFormat.formattedSurname);
    page.checkIfContains(registrationFormDataToFormat.formattedPhoneNumber);
    page.checkIfContains(registrationFormDataToFormat.formattedEmail);
    page.checkIfContains(registrationFormDataToFormat.formattedEducation);
    page.checkIfContains(registrationFormDataToFormat.formattedThreePartyAgreementText);
    page.checkIfContains(registrationFormDataToFormat.available14To18);
    page.checkIfContains(registrationFormDataToFormat.formattedFreeTimeActivity);
    page.checkIfContains(registrationFormDataToFormat.formattedMotivation);
    page.checkIfContains(registrationFormDataToFormat.formattedExperience);
    page.checkIfContains(registrationFormDataToFormat.formattedInfoAboutAcademy);
  });
});
