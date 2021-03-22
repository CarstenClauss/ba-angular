import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { SupportComponent } from './support'
import { PerformanceComponent } from './performance'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'support', component: SupportComponent},
  {path: 'performance', component: PerformanceComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
