import { Injectable } from '@angular/core';
import {Application} from '../shared/application';
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterBy(applications: Application[], searchInput: string): Application[] {
    const filteredApplications: Application[] = [];
    for (const application of applications) {
      const names = application.name.split(/[\s-]+/).concat(application.surname.split(/[\s-]+/));
      const searchStrings = searchInput.split(/[\s-]+/);
      let counter = 0;
      for (const search of searchStrings) {
        for (const name of names) {
          if (name.toLowerCase().lastIndexOf(search.toLowerCase(), 0) === 0) {
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
}
