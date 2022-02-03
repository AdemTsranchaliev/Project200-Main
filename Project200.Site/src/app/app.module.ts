import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { StudioDetailComponent } from './studio-detail/studio-detail.component';
import { StudioListMainComponent } from './studio-list-main/studio-list-main.component';
import { AddStudioComponent } from './add-studio/add-studio.component';
import { AddStudioZeroComponent } from './add-studio/add-studio-zero/add-studio-zero.component';
import { AddStudioFirstComponent } from './add-studio/add-studio-first/add-studio-first.component';
import { AddStudioSecondComponent } from './add-studio/add-studio-second/add-studio-second.component';
import { AddStudioThirdComponent } from './add-studio/add-studio-third/add-studio-third.component';
import { AddStudioFourthComponent } from './add-studio/add-studio-fourth/add-studio-fourth.component';
import { AddStudioFinalComponent } from './add-studio/add-studio-final/add-studio-final.component';
import { CommingSoonComponent } from './shared/components/comming-soon/comming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StudioDetailComponent,
    StudioListMainComponent,
    AddStudioComponent,
    AddStudioZeroComponent,
    AddStudioFirstComponent,
    AddStudioSecondComponent,
    AddStudioThirdComponent,
    AddStudioFourthComponent,
    AddStudioFinalComponent,
    CommingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
