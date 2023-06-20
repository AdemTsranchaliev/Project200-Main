// Angular
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

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
import { BookingTableComponent } from './booking-table/booking-table.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
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
import { StudioCardComponent } from './shared/studio-card/studio-card.component';
import { StudioDetailsComponent } from './studio/studio-details/studio-details.component';
import { MatButtonModule } from '@angular/material/button';
import { ReviewModalComponent } from './shared/components/modals/review-modal/review-modal.component';

//Language
import { registerLocaleData } from '@angular/common';
import localeBg from '@angular/common/locales/bg';

registerLocaleData(localeBg);

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
    BookingTableComponent,
    BookingDetailComponent,

    // Auth
    LoginComponent,
    RegisterComponent,
    StudioListMainComponent,
    PaginatorComponent,

    //Studio
    StudioDetailsComponent,

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
    ReviewModalComponent,
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
    MatAutocompleteModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [CommonService, { provide: LOCALE_ID, useValue: 'bg' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
