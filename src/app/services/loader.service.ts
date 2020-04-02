import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  hideLoader(): void {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    if ( document.getElementById('break')) {
      document.getElementById('break').style.display = 'none';
    }
  }

  showLoader(): void {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('content').style.display = 'none';
    if (document.getElementById('break')) {
      document.getElementById('break').style.display = 'block';
    }
  }
}
