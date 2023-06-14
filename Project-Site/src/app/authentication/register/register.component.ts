// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import { InputValidator } from 'src/app/shared/utils/input-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  inputValidator: InputValidator;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.inputValidator = new InputValidator();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      checkbox: [''],
    });
  }

  onSubmit() {
    console.log('>>>', 'Data to be here');
  }
}
