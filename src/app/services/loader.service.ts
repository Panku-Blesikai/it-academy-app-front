import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  hideLoader(): void {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }

  showLoader(): void {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('content').style.display = 'none';
  }
}
