import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server is down...';
  constructor(private service: DemoService) {
    service.getHelloWorld().subscribe((text: string) => {
      this.title = text;
    });
  }
}
