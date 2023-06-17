// Angular
import { FormGroup } from '@angular/forms';

export class InputValidator {
  public validateControl = (controlName: string, formGroup: FormGroup) => {
    formGroup.controls[controlName]?.valueChanges.subscribe(() => {
      formGroup.controls[controlName]?.markAsTouched();
    });

    return formGroup.controls[controlName]?.touched;
  };

  public validateEmail = (controlName: string, formGroup: FormGroup) => {
    return formGroup.controls[controlName]?.errors?.email;
  };

  public hasError = (
    controlName: string,
    formGroup: FormGroup,
    errorName: string
  ) => {
    return formGroup.controls[controlName].hasError(errorName);
  };
}
