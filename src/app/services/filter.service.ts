import { Injectable } from '@angular/core';
import {Application} from '../shared/application';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterBy(applications: Application[], searchInput: string): Application[] {
    const filteredApplications: Application[] = [];
    for (const application of applications) {
      console.log('Comparing ' + application.name + ', ' + application.surname + ' with ' + searchInput);
      if (application.name.lastIndexOf(searchInput, 0) === 0 || application.surname.lastIndexOf(searchInput, 0) === 0) {
        console.log('confirmed');
        filteredApplications.push(application);
      }
    }
    return filteredApplications;
  }
}
