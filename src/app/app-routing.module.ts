import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LoginComponent } from './login/login.component';
import { CanNavigateToAdminGuard } from './shared/can-navigate-to-admin.guard';
import { CanNavigateToLocationGuard } from './shared/can-navigate-to-location.guard';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import { VaccinationFormComponent } from './vaccination-form/vaccination-form.component';
import { VaccinationListComponent } from './vaccination-list/vaccination-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'vaccinations', component:VaccinationListComponent},
  {path:'vaccinations/:id', component:VaccinationDetailsComponent},
  {path:'locations', component:LocationListComponent},
  {path:'locations/:id', component:LocationDetailsComponent},
  {path:'users', component:UserFormComponent},
  {path:'users/:vaccination_id', component:UserFormComponent},
  {path:'admin', component:VaccinationFormComponent, canActivate:[CanNavigateToAdminGuard]},
  {path:'admin/:id', component:VaccinationFormComponent},
  {path:'newlocations', component:LocationFormComponent, canActivate:[CanNavigateToLocationGuard]},
  {path:'newlocations/:id', component:LocationFormComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard, CanNavigateToLocationGuard],
})
export class AppRoutingModule { }