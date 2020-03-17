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
  constructor( private fb: FormBuilder) { }
  application: Application;
  // serverErrorMessage: string;

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.application = {id: '', name: '', surname: '', email: '', tel: '', education: '', answerFreeTime: '', answerContract: '', answerAvailable14To18: '', answerMotivation: '', answerExperience: '', answerInfoAbout: ''}
  }


  registerForm = this.fb.group({
    name: ["", [Validators.required]],
    surname: ["",[Validators.required]],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)
      ]
    ],
    education: ["", [Validators.required]],
    tel: ["",[Validators.required]],
    answerFreeTime: ["",[Validators.required]],
    answerContract: ["",[Validators.required]],
    answerTime: ["",[Validators.required]],
    answerMotivation: ["",[Validators.required]],
    answerExperience: ["",[Validators.required]],
    answerInfoAbout: ["",[Validators.required]],
  });

  get name() {return this.registerForm.get("name");}
  get surname() {return this.registerForm.get("surname");}
  get email() {return this.registerForm.get("email");}
  get tel() {return this.registerForm.get("tel");}
  get education() {return this.registerForm.get("name");}
  get answerFreeTime() {return this.registerForm.get("answerFreeTime");}
  get answerContract() {return this.registerForm.get("answerContract");}
  get answerTime() {return this.registerForm.get("answerTime");}
  get answerMotivation() {return this.registerForm.get("answerMotivation");}
  get answerExperience() {return this.registerForm.get("answerExperience");}
  get answerInfoAbout() {return this.registerForm.get("answerInfoAbout");}

  // onRegister() {
  //   this.applicationService.addApplication(this.application).subscribe(
  //     () => {
  //       this.application = { id: "", name: "",surname: "", email: "", tel: "", education: "", answerFreeTime: "", answerContract: "", answerTime: "", answerMotivation: "", answerExperience: "", answerInfoAbout: "" };
  //       this.serverErrorMessage = "";
  //     },
  //     error => (this.serverErrorMessage = error)
  //   );
  // }

}
