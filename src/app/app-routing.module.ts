import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InvestmentComponent } from './investment/investment.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  {path:'side-nav',component:SideNavComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'transactions', component: TransactionComponent},
  { path: 'chart', component: ChartsComponent},
  {path: 'investment', component:InvestmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
