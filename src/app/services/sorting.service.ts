import { Injectable } from '@angular/core';
import {Application} from '../shared/application';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  public propertyName: string;
  public reverse: number;

  constructor() { }

  sortBy(applications: Application[], propertyName: string): Application[] {
    if (this.propertyName === propertyName) {
      this.reverse = -this.reverse;
    } else {
      this.reverse = 1;
    }
    this.propertyName = propertyName;
    return applications.sort((a, b) => this.compare(a[propertyName], b[propertyName]));
  }

  compare(a: string, b: string): number {
    if (a == null) {
      return 1;
    }
    if (b == null) {
      return -1;
    }
    return a.localeCompare(b) * this.reverse;
  }
}
