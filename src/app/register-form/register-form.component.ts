import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';

import { Application } from '../shared/application';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  constructor( private applicationService: ApplicationService, private fb: FormBuilder) { }

  get name() {return this.registerForm.get('name'); }
  get surname() {return this.registerForm.get('surname'); }
  get email() {return this.registerForm.get('email'); }
  get tel() {return this.registerForm.get('tel'); }
  get education() {return this.registerForm.get('name'); }
  get answerFreeTimeActivity() {return this.registerForm.get('answerFreeTimeActivity'); }
  get answerThreePartAgreement() {return this.registerForm.get('answerThreePartAgreement'); }
  get answerAvailable14To18() {return this.registerForm.get('answerAvailable14To18'); }
  get answerMotivation() {return this.registerForm.get('answerMotivation'); }
  get answerExperience() {return this.registerForm.get('answerExperience'); }
  get answerInfoAboutAcademy() {return this.registerForm.get('answerInfoAboutAcademy'); }
  serverErrorMessage: string;


  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)
      ]
    ],
    education: ['', [Validators.required]],
    tel: ['', [Validators.required]],
    answerFreeTimeActivity: ['', [Validators.required]],
    answerThreePartAgreement: ['', [Validators.required]],
    answerAvailable14To18: ['', [Validators.required]],
    answerMotivation: ['', [Validators.required]],
    answerExperience: ['', [Validators.required]],
    answerInfoAboutAcademy: ['', [Validators.required]],
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