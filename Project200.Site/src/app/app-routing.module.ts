import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudioComponent } from './add-studio/add-studio.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CommingSoonComponent } from './shared/components/comming-soon/comming-soon.component';
import { HomeComponent } from './home/home.component';
import { StudioDetailComponent } from './studio-detail/studio-detail.component';
import { StudioListMainComponent } from './studio-list-main/studio-list-main.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'studioListMain', component: StudioListMainComponent },
  { path: 'studioDetail', component: StudioDetailComponent },
  { path: 'addStudio', component: AddStudioComponent },
  { path: '**', component: CommingSoonComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
