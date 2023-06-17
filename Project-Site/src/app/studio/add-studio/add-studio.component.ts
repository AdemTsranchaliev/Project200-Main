import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { StudioDto } from '../studio-dto.model';
import { Studio } from 'src/app/shared/models/studio/studio.model';

@Component({
  selector: 'app-add-studio',
  templateUrl: './add-studio.component.html',
  styleUrls: ['./add-studio.component.css'],
})
export class AddStudioComponent implements OnInit {
  stepper = 0;
  show: boolean[] = [false, true, true, true, true];
  studio: Studio = new Studio();

  constructor(
    private _formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient,
    private router: Router
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  nextStep($event: any) {
    console.log(JSON.stringify(this.studio));
    this.show[this.stepper] = true;
    this.stepper++;
    this.show[this.stepper] = false;
  }

  previousStep($event: any) {
    this.show[this.stepper] = true;
    this.stepper--;
    this.show[this.stepper] = false;
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  sendModel() {
    let modelToSend: StudioDto = {
      id: '',
      userId: 1,
      tags: JSON.stringify(this.studio.tags),
      phone: this.studio.phone,
      facebook: this.studio.facebookUrl,
      name: this.studio.name,
      address: null,
      area: this.studio.address.area,
      town: this.studio.address.town,
      postalCode: this.studio.address.postalCode,
      email: this.studio.email,
      description: this.studio.description,
      motto: this.studio.motto,
      workingTime: JSON.stringify(this.studio.workingTime),
      services: JSON.stringify(this.studio.services),
      imageSources: JSON.stringify(this.studio.images),
      map: JSON.stringify(this.studio.coordinates),
      reviews: null,
    };

    this.http
      .post('https://localhost:7073/api/studio/createstudio', modelToSend)
      .subscribe((x) => {
        this.router.navigate(['my-studio-details']);
      });
  }

  getBase64(event: any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
