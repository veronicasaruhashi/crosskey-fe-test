import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentFundListRoutingModule } from './investment-fund-list-routing.module';
import { InvestmentFundListComponent } from './investment-fund-list.component';
import { HeaderPageModule } from 'src/app/core/components/header-page/header-page.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableModule } from 'src/app/core/components/table/table.module';
import { InvestmentFundService } from 'src/app/services/investment-fund/investment-fund.service';

@NgModule({
  declarations: [InvestmentFundListComponent],
  providers: [InvestmentFundService],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    HeaderPageModule,
    TableModule,
    InvestmentFundListRoutingModule,
  ],
})
export class InvestmentFundListModule {}
