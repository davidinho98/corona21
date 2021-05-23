import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VaccinationListComponent } from './vaccination-list/vaccination-list.component';
import { VaccinationListItemComponent } from './vaccination-list-item/vaccination-list-item.component';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import { VaccinationService } from './shared/vaccination.service';
import { LocationService } from './shared/location.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { VaccinationFormComponent } from './vaccination-form/vaccination-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { JwtInterceptorService } from './shared/jwt.interceptor.service';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { LocationDetailsComponent } from './location-details/location-details.component';

registerLocaleData(localeDe);

@NgModule({
  imports:[ BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, VaccinationListComponent, VaccinationListItemComponent, VaccinationDetailsComponent, HomeComponent, SearchComponent, VaccinationFormComponent, LoginComponent, LocationListComponent, LocationListItemComponent, LocationDetailsComponent ],
  bootstrap: [ AppComponent ],
  providers: [VaccinationService, LocationService, AuthenticationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true
  },
  {
    provide: LOCALE_ID, useValue: 'de'
  }]
})
export class AppModule { }
