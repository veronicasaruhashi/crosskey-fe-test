import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'investment-fund-list',
    loadChildren: () =>
      import('./pages/investment-fund-list/investment-fund-list.module').then(
        (m) => m.InvestmentFundListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
