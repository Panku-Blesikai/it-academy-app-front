import {Component, OnInit} from '@angular/core';
import {
  Validators,
  FormBuilder,
  AbstractControl
} from '@angular/forms';

import {ApplicationService} from '../services/application.service';
import {Router} from '@angular/router';
import {LoaderService} from '../services/loader.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private applicationService: ApplicationService, private router: Router, private fb: FormBuilder,
              private loaderService: LoaderService) {
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
    return this.registerForm.get('education');
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

  applicationId: string;
  serverErrorMessage: string;


  registerForm = this.fb.group({
    name: ['', {
      validators: [Validators.required, Validators.maxLength(256), this.regexValidator(new RegExp(`^(?=.*\\S).+$`)),
        this.regexValidator(new RegExp(`^[^0-9]+$`)), this.regexValidator(new RegExp(`^[^!-,./:-@[-\`{-~]+$`))],
      updateOn: 'blur'
    }],
    surname: ['', {
      validators: [Validators.required, Validators.maxLength(256), this.regexValidator(new RegExp(`^(?=.*\\S).+$`)),
        this.regexValidator(new RegExp(`^[^0-9]+$`)), this.regexValidator(new RegExp(`^[^!-,./:-@[-\`{-~]+$`))],
      updateOn: 'blur'
    }],
    email: ['', {
      validators: [Validators.required, Validators.maxLength(256),
        Validators.pattern(new RegExp(`^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-z"A-Z]{2,7}$`))],
      updateOn: 'blur'
    }],
    phone: ['', {
      validators: [Validators.required, Validators.pattern(`[+]370[0-9]{8}$`), Validators.maxLength(12)],
      updateOn: 'blur'
    }],
    education: ['', {
      validators: [Validators.required, Validators.pattern(`^(?=.*\\S).+$`), Validators.maxLength(256)],
      updateOn: 'blur'
    }],
    freeTimeActivity: ['', {
      validators: [Validators.required, Validators.pattern(`^(?=.*\\S).+$`), Validators.maxLength(1024)],
      updateOn: 'blur'
    }],
    threePartyAgreement: ['', {
      validators: [Validators.required, Validators.pattern(`^(?=.*\\S).+$`), Validators.maxLength(1024)],
      updateOn: 'blur'
    }],
    available14To18: ['', {
      validators: [Validators.required, Validators.maxLength(5)],
      updateOn: 'blur'
    }],
    motivation: ['', {
      validators: [Validators.required, Validators.pattern(`^(?=.*\\S).+$`), Validators.maxLength(1024)],
      updateOn: 'blur'
    }],
    experience: ['', {
      validators: [Validators.required, Validators.pattern(`^(?=.*\\S).+$`), Validators.maxLength(1024)],
      updateOn: 'blur'
    }],
    infoAboutAcademy: ['', {
      validators: [Validators.required, Validators.pattern(`^(?=.*\\S).+$`), Validators.maxLength(1024)],
      updateOn: 'blur'
    }],
    gdpr: [
      false,
      Validators.pattern('true')
    ]
  });

  regexValidator(regex: RegExp) {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : {regexValidator: {value: control.value}};
    };
  }

  ngOnInit(): void {
    this.loaderService.hideLoader();
  }

  onSubmit() {
    this.applicationService.addApplication(this.registerForm.value).subscribe(
      response => {
        this.applicationId = response.idHash;
        this.serverErrorMessage = '';
      },
      error => (this.serverErrorMessage = error),
      () => this.router.navigate(['/register/success'],
        {queryParams: {idHash: this.applicationId}})
    );
  }

  charCounter(inputClass, area) {
    const inputField = document.getElementById(inputClass) as HTMLInputElement;
    document.getElementById(area).innerHTML = (inputField.maxLength - inputField.value.length).toString();
  }

  yesCheckThreePartyAgreement(): void {
    document.getElementById('threePartyAgreement').style.display = 'none';
    document.getElementById('remaining-threePartyAgreement').style.display = 'none';
    this.threePartyAgreement.setValue('Taip');
  }

  noCheckThreePartyAgreement(): void {
    document.getElementById('threePartyAgreement').style.display = 'block';
    document.getElementById('remaining-threePartyAgreement').style.display = 'block';
    this.threePartyAgreement.setValue('');
  }

  yesCheckAvailable14To18(): void {
    this.available14To18.setValue('Taip');
  }

  noCheckAvailable14To18(): void {
    this.available14To18.setValue('Ne');
  }

  showLoader(): void {
    this.loaderService.showLoader();
  }
}

