import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormBuilder} from '@angular/forms';

import {Application} from '../shared/application';
import {ApplicationService} from '../services/application.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private applicationService: ApplicationService, private router: Router, private fb: FormBuilder) {
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

  get tel() {
    return this.registerForm.get('tel');
  }

  get education() {
    return this.registerForm.get('name');
  }

  get answerFreeTimeActivity() {
    return this.registerForm.get('answerFreeTimeActivity');
  }

  get answerThreePartAgreement() {
    return this.registerForm.get('answerThreePartAgreement');
  }

  get answerAvailable14To18() {
    return this.registerForm.get('answerAvailable14To18');
  }

  get answerMotivation() {
    return this.registerForm.get('answerMotivation');
  }

  get answerExperience() {
    return this.registerForm.get('answerExperience');
  }

  get answerInfoAboutAcademy() {
    return this.registerForm.get('answerInfoAboutAcademy');
  }

  applicationId: string;
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
    tel: ['',
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
    answerFreeTimeActivity: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    answerThreePartAgreement: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    answerAvailable14To18: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    answerMotivation: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    answerExperience: ['',
      [
        Validators.required,
        Validators.maxLength(1024)
      ]
    ],
    answerInfoAboutAcademy: ['',
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
      response => {
        this.applicationId = response.idHash;
        this.serverErrorMessage = '';
      },
      error => (this.serverErrorMessage = error),
       () => this.router.navigate(['/register/success'],
         { queryParams: {idHash: this.applicationId}})
    );
  }
}

