import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { LhsLinkImg, LhsLinks } from './models/lhs-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'job-ang-mat-popup2';
  submitted = false;
  pattern = new RegExp(/^(?=.*?[äöüÄÖÜß])/);
 
  registrationForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required,
                  Validators.minLength(2),
                  Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),]],
    email: ['', [Validators.required, Validators.email,
                  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),]],
    phoneNum: ['', [Validators.required,  
                  Validators.maxLength(10), Validators.pattern('^[0-9]+$'),]],
    password: ['', [Validators.required,  
                    Validators.maxLength(15)]],
  });
  
  // PasswordValidation: this.fb.group({
     //   password: [''],
  //});     
 // email = new FormControl('', [Validators.required, Validators.email]);

  list: LhsLinkImg[] = [];
  lhsList$: Observable<LhsLinkImg[]> = from([]);
  
  constructor(private fb: FormBuilder){
    this.list = new LhsLinks().lhsList;
  }

  ngOnInit(){
      this.lhsList$ = of(this.list); 
  }

  getErrorMessage() {
    if (this.f2['email'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.f2['email'].hasError('email') ? 'Not a valid email' : '';
  }

  onStrengthChanged(evt: number){
  }

  get f(){
    return this.registrationForm;
  }
  
  get f2(){
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
 
    if (!this.registrationForm.valid) {
        alert('Please fill all the required fields to create a super hero!');
        return false;
    } else {
        return console.log(this.registrationForm.value);
    }
  }
}
  