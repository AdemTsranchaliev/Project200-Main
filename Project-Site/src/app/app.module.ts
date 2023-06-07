// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { AppRoutingModule } from './app-routing.module';
// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
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

    // Auth
    LoginComponent,
    RegisterComponent,
    StudioListMainComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    //Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
