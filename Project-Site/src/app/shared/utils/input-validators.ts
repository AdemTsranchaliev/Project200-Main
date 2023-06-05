import { FormGroup } from '@angular/forms';

export class InputValidator {
    public validateControl = (controlName: string, formGroup: FormGroup) => {
        return formGroup.controls[controlName].touched;
    };

    public validateEmail = (controlName: string, formGroup: FormGroup) => {
        return formGroup.controls[controlName].errors?.email;
    };

    public hasError = (
        controlName: string,
        formGroup: FormGroup,
        errorName: string
    ) => {
        return formGroup.controls[controlName].hasError(errorName);
    };
}