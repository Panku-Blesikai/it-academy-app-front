import {Component, Input, OnInit} from '@angular/core';
import {Application} from "../shared/application";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  @Input() application: Application;
  constructor() { }

  ngOnInit(): void {
  }

}
