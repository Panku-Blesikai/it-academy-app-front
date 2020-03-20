import {Component, Input, OnInit} from '@angular/core';
import {Application} from '../shared/application';
import {SortingService} from '../services/sorting.service';
import {FilterService} from '../services/filter.service';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss']
})
export class ApplicationsListComponent implements OnInit {
  @Input() allApplications: Application[];
  public applications: Application[];

  constructor(private sortingService: SortingService, private filterService: FilterService) { }

  filter(searchInput: string) {
    this.applications = this.filterService.filterBy(this.allApplications, searchInput);
  }

  sort(propertyName: string) {
    this.applications = this.sortingService.sortBy(this.applications, propertyName);
  }


  ngOnInit(): void {
    this.applications = this.allApplications;
  }
}
