import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { VaccinationFormComponent } from './vaccination-form/vaccination-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';

@NgModule({
  imports:[ BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, VaccinationListComponent, VaccinationListItemComponent, VaccinationDetailsComponent, HomeComponent, SearchComponent, VaccinationFormComponent, LoginComponent ],
  bootstrap: [ AppComponent ],
  providers: [VaccinationService, LocationService, AuthenticationService]
})
export class AppModule { }
