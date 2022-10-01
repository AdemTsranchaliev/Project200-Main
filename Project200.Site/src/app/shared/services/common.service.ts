import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  public validateFormTouched(form: FormGroup, propertyName: string) {
    return (
      form.get(propertyName)?.touched ||
      (form.get(propertyName)?.dirty && form.get(propertyName)?.valid)
    );
  }
  public validateLength(form: FormGroup, propertyName: string) {
    if (this.validateFormTouched(form, propertyName)) {
      return (       
        (form.get(propertyName)?.errors?.minlength ||
          form.get(propertyName)?.errors?.maxlength)
      );
    }
    return false;
  }
  public validateRequired(form: FormGroup, propertyName: string) {
    if (this.validateFormTouched(form, propertyName)) {
      return form.get(propertyName)?.errors?.["required"];
    }

    return false;
  }
}
