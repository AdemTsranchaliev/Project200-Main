// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
// Modules
import { AppRoutingModule } from './app-routing.module';
// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserReservationsComponent } from './user/user-reservations/user-reservations.component';
import { UserPersonalInformationComponent } from './user/user-personal-information/user-personal-information.component';
import { UserSecurityComponent } from './user/user-security/user-security.component';
import { UserAccountGridComponent } from './user/user-account-grid/user-account-grid.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { StudioListMainComponent } from './studio/studio-list-main/studio-list-main.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogLeftMapComponent } from './catalog-left-map/catalog-left-map.component';
import { BookingTableComponent } from './booking-table/booking-table.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { StudioEmployeeComponent } from './studio/studio-employee/studio-employee.component';
import { StudioEmployeeDetailsComponent } from './studio/studio-employee-details/studio-employee-details.component';
// Shared Components
import { StarComponent } from './shared/components/star/star.component';
import { LoadMoreButtonComponent } from './shared/components/load-more-button/load-more-button.component';
import { AddStudioComponent } from './studio/add-studio/add-studio.component';
import { IntroductionComponent } from './studio/add-studio/introduction/introduction.component';
import { BasicInformationComponent } from './studio/add-studio/basic-information/basic-information.component';
import { CommonService } from './shared/services/common.service';
import { AutocompleteComponent } from './shared/components/autocomplete/autocomplete.component';
import { ChipsComponent } from './shared/components/chips/chips.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MapComponent } from './shared/components/map/map.component';
import { DetailedInformationComponent } from './studio/add-studio/detailed-information/detailed-information.component';
import { ServicesComponent } from './studio/add-studio/services/services.component';
import { ImagesComponent } from './studio/add-studio/images/images.component';
import { PaginatorComponent } from './shared/components/paginator/paginator.component';
import { StudioCardComponent } from './shared/components/studio-card/studio-card.component';
import { RangeSliderComponent } from './shared/components/range-slider/range-slider.component';
import { CatalogFilterModalComponent } from './shared/components/modals/catalog-filter-modal/catalog-filter-modal.component';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { CalendarDayComponent } from './shared/components/calendar-day/calendar-day.component';
import { CalendarWeekComponent } from './shared/components/calendar-week/calendar-week.component';


@NgModule({
  declarations: [
    //Home components
    AppComponent,
    HomeComponent,

    //User components
    UserReservationsComponent,
    UserPersonalInformationComponent,
    UserSecurityComponent,
    UserAccountGridComponent,
    CatalogComponent,
    CatalogLeftMapComponent,
    BookingTableComponent,
    BookingDetailComponent,
    StudioEmployeeComponent,
    StudioEmployeeDetailsComponent,

    // Auth
    LoginComponent,
    RegisterComponent,
    StudioListMainComponent,
    PaginatorComponent,

    // Shared
    StarComponent,
    LoadMoreButtonComponent,
    AddStudioComponent,
    IntroductionComponent,
    BasicInformationComponent,
    AutocompleteComponent,
    ChipsComponent,
    MapComponent,
    DetailedInformationComponent,
    ServicesComponent,
    ImagesComponent,
    StudioCardComponent,
    RangeSliderComponent,
    CatalogFilterModalComponent,
    CalendarComponent,
    CalendarDayComponent,
    CalendarWeekComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxSliderModule,
    DragDropModule,

    //Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
