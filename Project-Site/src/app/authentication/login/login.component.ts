// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { InputValidator } from 'src/app/shared/utils/input-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  loginForm!: FormGroup;
  inputValidator: InputValidator;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.inputValidator = new InputValidator();
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    console.log('>>>');
  }
}
