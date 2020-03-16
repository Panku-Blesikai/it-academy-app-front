import {Component, Input, OnInit} from '@angular/core';
import { ApplicationService } from '../services/application.service';
import {Application} from '../shared/application';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss']
})
export class ApplicationsListComponent implements OnInit {
  @Input() applications: Application[];
  constructor() { }

  ngOnInit(): void {
  }

}
