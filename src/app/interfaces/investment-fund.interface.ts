export interface InvestmentFund {
  instrumentId: string;
  isin: string;
  fundName: string;
  fundType: string;
  estimationDate: number;
  rate: number;
  change1y: number;
  currency: string;
  availableForMonthlySaving: boolean;
  redemptionMinFee: InvestmentFundValue;
  redemptionPercent?: number;
  subscriptionMinFee: InvestmentFundValue;
  subscriptionPercent?: number;
  subscriptionMinValue: InvestmentFundValue;
  investmentClass?: string;
  permissions?: InvestmentFundPermission;
  buyCommissions?: number;
  sellCommissions?: number;
  change1m: number;
  change3m: number;
  change3y: number;
  minimumCommission?: number;
  technicalCommission?: number;
  technicalCommissionUp?: number;
  sellCommission?: number;
  administrativeFee: number;
  startDate: number;
  yearHigh: number;
  yearLow: number;
  graphImageLink?: string;
  documents?: InvestmentFundDocument[];
  fundCompany: string;
  startValue: number;
  closePrice: number;
  latestClosePriceDate: number;
  countDecimals: number;
}

export interface InvestmentFundPermission {
  allowedToBuy: boolean;
  allowedToSell: boolean;
  allowedToSwap: boolean;
  allowedForWatchlist: boolean;
  allowedForDetailedInformation: boolean;
  allowedToTrade: boolean;
}

export interface InvestmentFundDocument {
  url?: string;
  title: string;
}

export interface InvestmentFundValue {
  amount: number;
  currency: string;
  empty: boolean;
}
