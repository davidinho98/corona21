import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LoginComponent } from './login/login.component';
import { CanNavigateToAdminGuard } from './shared/can-navigate-to-admin.guard';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import { VaccinationFormComponent } from './vaccination-form/vaccination-form.component';
import { VaccinationListComponent } from './vaccination-list/vaccination-list.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'vaccinations', component:VaccinationListComponent},
  {path:'vaccinations/:id', component:VaccinationDetailsComponent},
  {path:'locations', component:LocationListComponent},
  {path:'locations/:id', component:LocationDetailsComponent},
  {path:'admin', component:VaccinationFormComponent, canActivate:[CanNavigateToAdminGuard]},
  {path:'admin/:id', component:VaccinationFormComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard]
})
export class AppRoutingModule { }