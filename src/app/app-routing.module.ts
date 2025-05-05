import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { IndividualsComponent } from './pages/individuals/individuals.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'schools',component:SchoolsComponent},
  {path:'individuals',component:IndividualsComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
