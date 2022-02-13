import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { UserRegisterModel } from 'src/app/shared/models/AuthModels/UserRegisterModel';
import { AuthService } from 'src/app/shared/services/auth.service';

import Validation from './confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMode: UserRegisterModel = new UserRegisterModel();
  status: number = -1;
  // TO DO Checkbox 
  salonCheckbox: boolean = false;

  registerForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('\^(\?=.\*\\d)(\?=.\*\[a-z\])(\?=.\*\[A-Z\])\[0-9a-zA-Z\]\{6,\}\$'), Validators.maxLength(30)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
  }, {
    validators: [Validation.match('password', 'confirmPassword')]

  });

  constructor(private authService: AuthService, private _formBuilder: FormBuilder, private router: Router,
    private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
  }

  //Fix this
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(x => { console.log(this.socialAuthService.authState.subscribe(x => console.log(x))) });
  }

  onSubmit() {
    let model: UserRegisterModel = new UserRegisterModel()
    model = {
      email: this.registerForm.get('email')?.value,
      username: this.registerForm.get('name')?.value,
      password: this.registerForm.get('password')?.value
    };

    if (this.registerForm.valid) {
      console.log(model)
      this.authService.registerUser("Authenticate/register",
        model)
        .subscribe(
          success => {
            // call auth service => login from server
            this.router.navigate(['login'])
          },
          err => {
            this.status = 1;
          }
        );
    } else {
      this.status = 1;
    }
  }
}
