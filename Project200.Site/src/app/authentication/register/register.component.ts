import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { UserRegisterModel } from 'src/app/shared/models/AuthModels/UserRegisterModel';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMode: UserRegisterModel = new UserRegisterModel();
  status: number = -1;
  
  registerForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
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
    console.log(model)
    this.authService.registerUser("Authenticate/register",
      model)
      .subscribe(
        success => {
          this.router.navigate(['login'])
        },
        err => {
          this.status = 1;
        }
      );
  }

}
