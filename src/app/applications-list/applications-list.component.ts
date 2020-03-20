import {Component, Input, OnInit} from '@angular/core';
import { ApplicationService } from '../services/application.service';
import {Application} from '../shared/application';
import {prepareSyntheticPropertyName} from "@angular/compiler/src/render3/util";

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss']
})
export class ApplicationsListComponent implements OnInit {
  @Input() applications: Application[];
  public propertyName: string;
  public reverse: number;

  constructor(private applicationService: ApplicationService) { }

  sortBy(propertyName: string): void {
    if(this.propertyName === propertyName) {
      this.reverse = -this.reverse;
    } else {
      this.reverse = 1;
    }
    this.propertyName = propertyName;
    this.applications.sort((a, b) => this.compare(a[propertyName], b[propertyName]));
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

  ngOnInit(): void {
  }

}
