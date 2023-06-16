// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { UserAccountGridComponent } from './user/user-account-grid/user-account-grid.component';
import { UserPersonalInformationComponent } from './user/user-personal-information/user-personal-information.component';
import { UserReservationsComponent } from './user/user-reservations/user-reservations.component';
import { UserSecurityComponent } from './user/user-security/user-security.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BookingTableComponent } from './booking-table/booking-table.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

const routes: Routes = [
  //Home paths
  { path: '', component: HomeComponent },
  //User profile paths
  { path: 'my-account-grid', component: UserAccountGridComponent },
  { path: 'my-personal-information', component: UserPersonalInformationComponent },
  { path: 'my-reservations', component: UserReservationsComponent },
  { path: 'my-account-security', component: UserSecurityComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'bookings-table', component: BookingTableComponent },
  { path: 'booking-detail/:id', component: BookingDetailComponent },

  //Authentication
  { path: 'login', component: LoginComponent },

  //Registration
  { path: 'register', component: RegisterComponent },

  //Default paths
  { path: '**', redirectTo: '' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
