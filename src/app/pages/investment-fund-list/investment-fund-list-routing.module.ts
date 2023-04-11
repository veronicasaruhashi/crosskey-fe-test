import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentFundListComponent } from './investment-fund-list.component';

const routes: Routes = [{ path: '', component: InvestmentFundListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentFundListRoutingModule {}
