import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  hideLoader(doc): void {
    doc.getElementById('loader').style.display = 'none';
    doc.getElementById('content').style.display = 'block';
  }
}
