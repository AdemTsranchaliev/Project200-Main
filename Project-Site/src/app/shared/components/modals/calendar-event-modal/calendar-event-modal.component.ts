import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// This Interfaces will be add to 'models'
interface SalonService {
  value: string;
  viewValue: string;
}

interface SalonServiceGroup {
  disabled?: boolean;
  name: string;
  services: SalonService[];
}

@Component({
  selector: 'app-calendar-event-modal',
  templateUrl: './calendar-event-modal.component.html',
  styleUrls: ['./calendar-event-modal.component.css']
})
export class CalendarEventModalComponent implements OnInit {
  // Main Form
  calendarEventForm!: FormGroup;

  // Those procedures can came from the Salon API
  salonProcedures: SalonServiceGroup[] = [
    {
      name: 'Hair',
      services: [
        { value: 'haircut-0', viewValue: 'Haircut' },
        { value: 'hair-coloring-1', viewValue: 'Hair Coloring' },
        { value: 'hair-styling-2', viewValue: 'Hair Styling' },
        { value: 'hair-extensions-3', viewValue: 'Hair Extensions' },
        { value: 'hair-smoothing-treatment-4', viewValue: 'Hair Smoothing Treatment' },
        { value: 'hair-perming-5', viewValue: 'Hair Perming' },
        { value: 'hair-deep-conditioning-6', viewValue: 'Hair Deep Conditioning' },
      ],
    },
    {
      name: 'Nails',
      services: [
        { value: 'manicure-7', viewValue: 'Manicure' },
        { value: 'pedicure-8', viewValue: 'Pedicure' },
        { value: 'nail-extensions-9', viewValue: 'Nail Extensions' },
        { value: 'gel-nail-polish-10', viewValue: 'Gel Nail Polish' },
        { value: 'acrylic-nails-11', viewValue: 'Acrylic Nails' },
        { value: 'nail-art-12', viewValue: 'Nail Art' },
      ],
    },
    {
      name: 'Facial',
      services: [
        { value: 'facial-13', viewValue: 'Facial' },
        { value: 'microdermabrasion-14', viewValue: 'Microdermabrasion' },
        { value: 'chemical-peel-15', viewValue: 'Chemical Peel' },
        { value: 'skin-rejuvenation-16', viewValue: 'Skin Rejuvenation' },
      ],
    },
    {
      name: 'Eyes',
      services: [
        { value: 'eyebrow-shaping-17', viewValue: 'Eyebrow Shaping' },
        { value: 'eyelash-extensions-18', viewValue: 'Eyelash Extensions' },
        { value: 'makeup-application-19', viewValue: 'Makeup Application' },
      ],
    },
  ];

  constructor(
    // If the data is 'null' we create event,
    // if we recieve data we need to display current Event!
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CalendarEventModalComponent>, // Inject MatDialogRef
  ) { }

  ngOnInit(): void {
    this.eventForm();
  }

  /**
  * Event Form for Calendar
  */
  eventForm(): void {
    this.calendarEventForm = this.formBuilder.group({
      clientName: [this.data?.title, [Validators.required]],
      clientPhone: [this.data?.clientPhone],
      procedure: [this.data?.procedure, [Validators.required]]
    });
  }

  /**
   * This Method returns Data to the Parent Component
   */
  saveEvent() {
    if (!this.calendarEventForm.invalid) {
      const clientName = this.calendarEventForm.get('clientName')?.value;
      const procedure = this.calendarEventForm.get('procedure')?.value;
      const clientPhone = this.calendarEventForm.get('clientPhone')?.value;

      // Emit the event data back to the parent component
      this.dialogRef.close({
        clientName,
        procedure,
        clientPhone,
        _status: this.data == null ? 'create' : 'edit'
      });
    }
  }
}
