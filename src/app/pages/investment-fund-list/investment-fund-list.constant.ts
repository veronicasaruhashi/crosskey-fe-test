import { TableColumnDefinition } from 'src/app/core/components/table/table.interface';
import { InvestmentFund } from 'src/app/interfaces/investment-fund.interface';

export const InvestmentFundListColumns: TableColumnDefinition<InvestmentFund>[] =
  [
    {
      columnDef: 'isin',
      header: 'ISIN',
      cssClass: 'hide-mobile',
      cell: (element: InvestmentFund) => `${element.isin}`,
    },
    {
      columnDef: 'fundName',
      header: 'Fund name',
      cell: (element: InvestmentFund) => `${element.fundName}`,
    },
    {
      columnDef: 'fundType',
      header: 'Fund type',
      cssClass: 'hide-mobile',
      cell: (element: InvestmentFund) => `${element.fundType}`,
    },
    {
      columnDef: 'currency',
      header: 'Currency',
      cssClass: 'hide-mobile',
      cell: (element: InvestmentFund) => `${element.currency}`,
    },
    {
      columnDef: 'change3y',
      header: '3Y',
      cssClass: 'right',
      cell: (element: InvestmentFund) =>
        `${element.change3y?.toFixed(2) || '-'}`,
    },
    {
      columnDef: 'change3m',
      header: '3M',
      cssClass: 'right',
      cell: (element: InvestmentFund) =>
        `${element.change3m?.toFixed(2) || '-'}`,
    },
    {
      columnDef: 'change1m',
      header: '1M',
      cssClass: 'right',
      cell: (element: InvestmentFund) =>
        `${element.change1m?.toFixed(2) || '-'}`,
    },
  ];

export const InvestmentFundListInfo =
  '<b>Capital at risk.</b> The value of investments and the income from them can fall as well as rise and are not guaranteed. Investors may not get back the amount originally invested. <b>The figures shown relate to past performance. Past performance is not a reliable indicator of current or future results and should not be the sole factor of consideration when selecting a product or strategy.</b>';
