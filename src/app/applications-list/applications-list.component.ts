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
  private statusInput: string;
  private searchFieldInput: string;

  constructor(private sortingService: SortingService, private filterService: FilterService) { }

  updateSearchFieldInput(searchField: string) {
    this.searchFieldInput = searchField;
    this.filter();
  }

  updateStatusInput(status: string) {
    this.statusInput = status;
    this.filter();
  }

  filter() {
    this.applications = this.filterService.filterBy(this.allApplications, this.searchFieldInput, this.statusInput);
  }

  sort(propertyName: string) {
    this.applications = this.sortingService.sortBy(this.applications, propertyName);
  }


  ngOnInit(): void {
    this.applications = this.allApplications;
    this.statusInput = 'VISI';
    this.searchFieldInput = '';
  }
}
