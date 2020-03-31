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
  private availabilityInput: string;
  private agreementInput: string;
  private showAdvancedFilters: boolean;

  constructor(private sortingService: SortingService, private filterService: FilterService) { }

  updateSearchFieldInput(searchField: string) {
    this.searchFieldInput = searchField;
    this.filter();
  }

  updateStatusInput(status: string) {
    this.statusInput = status;
    this.filter();
  }

  updateAvailabilityInput(availability: string) {
    this.availabilityInput = availability;
    this.filter();
  }

  updateAgreementInput(agreement: string) {
    this.agreementInput = agreement;
    this.filter();
  }

  filter() {
    this.applications = this.filterService.filterBy(
      this.allApplications, this.searchFieldInput, this.statusInput, this.availabilityInput, this.agreementInput
    );
  }

  advancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
    if (this.showAdvancedFilters) {
      document.getElementById('show-advanced').innerHTML = '' +
        '<i class="fas fa-caret-down"></i>\n' +
        'Slėpti papildomus filtrus';
      document.getElementById('advanced-filters').style.display = 'block';
    } else {
      document.getElementById('show-advanced').innerHTML = '' +
        '<i class="fas fa-caret-right"></i>\n' +
        'Rodyti papildomus filtrus';
      document.getElementById('advanced-filters').style.display = 'none';
    }
  }

  sort(propertyName: string) {
    this.applications = this.sortingService.sortBy(this.applications, propertyName);
  }


  ngOnInit(): void {
    this.applications = this.allApplications;
    this.statusInput = 'VISI';
    this.searchFieldInput = '';
    this.availabilityInput = 'VISI';
    this.agreementInput = 'VISI';
    this.showAdvancedFilters = false;
  }
}
