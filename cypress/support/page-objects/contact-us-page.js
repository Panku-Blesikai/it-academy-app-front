import {Page} from "./page";

export class ContactUsPage extends Page {
    selectCustomerServiceOption(){
        cy.get('#id_contact').select('Customer service');
    };
}
