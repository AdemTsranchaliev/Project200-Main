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
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { PaginatorComponent } from './paginator/paginator.component';
// Shared Components
import { StarComponent } from './shared/star/star.component';
import { LoadMoreButtonComponent } from './shared/load-more-button/load-more-button.component';
import { StudioCardComponent } from './shared/studio-card/studio-card.component';


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
    BookingDetailComponent,

    // Auth
    LoginComponent,
    RegisterComponent,
    StudioListMainComponent,
    PaginatorComponent,

    // Shared
    StarComponent,
    LoadMoreButtonComponent,
    StudioCardComponent,
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
