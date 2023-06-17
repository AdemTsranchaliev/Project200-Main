// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
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
import {MatStepperModule} from '@angular/material/stepper';
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
import { BookingsTableComponent } from './bookings-table/bookings-table.component';
import { PaginatorComponent } from './shared/components/paginator/paginator.component';
// Shared Components
import { StarComponent } from './shared/star/star.component';
import { LoadMoreButtonComponent } from './shared/load-more-button/load-more-button.component';
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
    BookingsTableComponent,

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
    ImagesComponent
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
    MatAutocompleteModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
