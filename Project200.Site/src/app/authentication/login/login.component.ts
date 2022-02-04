import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/shared/models/AuthModels/UserLoginModel';
import { UserRegisterModel } from 'src/app/shared/models/AuthModels/UserRegisterModel';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginMode: UserLoginModel = new UserLoginModel();
  status: number = -1;

  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(private authService: AuthService, private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let model: UserLoginModel = new UserLoginModel()
    model = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
    console.log(model)
    this.authService.loginUser("Authenticate/login",
      model)
      .subscribe(
        res => {
          localStorage.setItem("token", res.token);
          this.router.navigate(['home']);
        },
        err => {
          this.status = 1;
        }
      );
  }

}
