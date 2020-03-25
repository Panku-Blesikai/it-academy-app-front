import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormBuilder} from '@angular/forms';

import {Application} from '../shared/application';
import {ApplicationService} from '../services/application.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  constructor(private applicationService: ApplicationService, private fb: FormBuilder) {
  }

  get name() {
    return this.registerForm.get('name');
  }

  get surname() {
    return this.registerForm.get('surname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get education() {
    return this.registerForm.get('name');
  }

  get freeTimeActivity() {
    return this.registerForm.get('freeTimeActivity');
  }

  get threePartyAgreement() {
    return this.registerForm.get('threePartyAgreement');
  }

  get available14To18() {
    return this.registerForm.get('available14To18');
  }

  get motivation() {
    return this.registerForm.get('motivation');
  }

  get experience() {
    return this.registerForm.get('experience');
  }

  get infoAboutAcademy() {
    return this.registerForm.get('infoAboutAcademy');
  }

  serverErrorMessage: string;


  registerForm = this.fb.group({
    name: ['',
      [
        Validators.required,
        Validators.maxLength(256)
      ]
    ],
    surname: ['',
      [
        Validators.required,
        Validators.maxLength(256)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.maxLength(256),
        Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)
      ]
    ],
    phone: ['',
      [
        Validators.required,
        Validators.pattern(`[+]370[0-9][-][0-9]{2}[-][0-9]{5}$`),
        Validators.maxLength(14)
      ]
    ],
    education: ['',
      [
        Validators.required,
        Validators.maxLength(256)
      ]
    ],
    freeTimeActivity: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    threePartyAgreement: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    available14To18: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    motivation: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    experience: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    infoAboutAcademy: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.applicationService.addApplication(this.registerForm.value).subscribe(
      () => {
        this.serverErrorMessage = '';
      },
      error => (this.serverErrorMessage = error)
    );
  }

}
