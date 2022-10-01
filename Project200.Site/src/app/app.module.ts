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
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './shared/services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RegisterStudioComponent } from './register-studio/register-studio.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { CommonService } from './shared/services/common.service';
import { AutocompleteComponent } from './shared/components/autocomplete/autocomplete.component';
import { ChipsComponent } from './shared/components/chips/chips.component';

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
    CommingSoonComponent,
    RegisterStudioComponent,
    AutocompleteComponent,
    ChipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatStepperModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("token");
        },
        allowedDomains: ["localhost:5001"],
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    CommonService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('***apps.googleusercontent.com') // your client id
          }
        ]
      }
    },
    SocialAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
