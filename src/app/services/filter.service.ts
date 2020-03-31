import {Injectable} from '@angular/core';
import {Application} from '../shared/application';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterBy(applications: Application[], searchInput: string, status: string,
           availabilityInput: string, agreementInput: string): Application[] {
    const filteredApplications: Application[] = [];
    for (const application of applications) {
      if (application.status !== status && status !== 'VISI') {
        continue;
      }
      if (availabilityInput === 'Ne' && application.available14To18 === 'Taip' ||
        availabilityInput === 'Taip' && application.available14To18 !== 'Taip') {
        continue;
      }
      if (agreementInput === 'Ne' && application.threePartyAgreement === 'Taip' ||
        agreementInput === 'Taip' && application.threePartyAgreement !== 'Taip') {
        continue;
      }
      const names = this.normalize(application.name).concat(this.normalize(application.surname));
      const searchStrings = this.normalize(searchInput);
      let counter = 0;
      for (const search of searchStrings) {
        for (const name of names) {
          if (name.lastIndexOf(search, 0) === 0) {
            counter++;
            break;
          }
        }
      }
      if (counter === searchStrings.length) {
        filteredApplications.push(application);
      }
    }
    return filteredApplications;
  }

  normalize(value: string): string[] {
    return this.removeAccents(value).toLowerCase().split(/[\s-]+/);
  }

  removeAccents(value: string): string {
     let modifiedValue = value;
     modifiedValue = modifiedValue.replace(/[Ąą]/g, 'a');
     modifiedValue = modifiedValue.replace(/[Čč]/g, 'c');
     modifiedValue = modifiedValue.replace(/[ĘęĖė]/g, 'e');
     modifiedValue = modifiedValue.replace(/[Įį]/g, 'i');
     modifiedValue = modifiedValue.replace(/[Šš]/g, 's');
     modifiedValue = modifiedValue.replace(/[ŲųŪū]/g, 'u');
     modifiedValue = modifiedValue.replace(/[Žž]/g, 'z');
     return modifiedValue;
  }
}
