import { Component } from '@angular/core';
import { InvestmentFund } from 'src/app/interfaces/investment-fund.interface';
import {
  InvestmentFundListColumns,
  InvestmentFundListInfo,
} from './investment-fund-list.constant';
import { Observable } from 'rxjs';
import { InvestmentFundService } from 'src/app/services/investment-fund/investment-fund.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-investment-fund-list',
  templateUrl: './investment-fund-list.component.html',
  styleUrls: ['./investment-fund-list.component.scss'],
})
export class InvestmentFundListComponent {
  source: Observable<InvestmentFund[]> =
    this.investimentFundService.getFundList();
  loading: Observable<boolean> = this.loadingService.isLoading$;

  columnsToDisplay = InvestmentFundListColumns;
  info = InvestmentFundListInfo;

  constructor(
    private investimentFundService: InvestmentFundService,
    private loadingService: LoadingService
  ) {}
}
