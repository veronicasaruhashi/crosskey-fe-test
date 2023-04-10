import { InvestmentFund } from '../interfaces/investment-fund.interface';
import { APIResponse } from '../interfaces/api-response.interface';

export const mockInvestmentFund: APIResponse<InvestmentFund>[] = [
  {
    status: {
      success: true,
      errors: [],
      infos: [],
      jSessionId: '1NUsNSBrbmQGYFKPdEnaK9efK0yjZIjm3iXIeFXp',
    },
    data: [
      {
        instrumentId: '9884',
        isin: 'LU0050372472',
        fundName: 'BlackRock GF Euro Bond Fund A2 EUR',
        fundType: 'Aktiefond',
        estimationDate: 1679868000000,
        rate: 25.6,
        change1y: -10.55,
        currency: 'EUR',
        availableForMonthlySaving: false,
        redemptionMinFee: {
          amount: 100,
          currency: 'EUR',
          empty: false,
        },
        subscriptionMinFee: {
          amount: 100,
          currency: 'EUR',
          empty: false,
        },
        subscriptionMinValue: {
          amount: 150,
          currency: 'EUR',
          empty: false,
        },
        permissions: {
          allowedToBuy: true,
          allowedToSell: false,
          allowedToSwap: false,
          allowedForWatchlist: true,
          allowedForDetailedInformation: true,
          allowedToTrade: true,
        },
        change1m: 1.35,
        change3m: 1.51,
        change3y: -11.57,
        administrativeFee: 0.75,
        startDate: 1564610400000,
        yearHigh: 26.06,
        yearLow: 24.94,
        documents: [
          {
            url: 'https://doc.morningstar.com/document/55a4a01bfd568359ddd5557ffd5568eb.msdoc/?clientid=alandsbanken&key=173740fb42c97e8e',
            title: 'Faktablad',
          },
          {
            url: 'https://www.alandsbanken.se/uploadsß/pdf/fund/cost_and_charges/LU0050372472_AOS.pdf',
            title: 'Förhandsinformation om kostnader',
          },
        ],
        fundCompany: 'BlackRock SA',
        startValue: 100,
        closePrice: 25.6,
        latestClosePriceDate: 1679868000000,
        countDecimals: 1,
      },
      {
        instrumentId: '9882',
        isin: 'LU0055631609',
        fundName: 'BlackRock Global Funds - World Gold A2 USD',
        fundType: 'Aktiefond',
        estimationDate: 1679868000000,
        rate: 34.46,
        change1y: -17.76,
        currency: 'USD',
        availableForMonthlySaving: false,
        redemptionMinFee: {
          amount: 0,
          currency: 'USD',
          empty: false,
        },
        subscriptionMinFee: {
          amount: 0,
          currency: 'USD',
          empty: false,
        },
        subscriptionMinValue: {
          amount: 100,
          currency: 'USD',
          empty: false,
        },
        permissions: {
          allowedToBuy: true,
          allowedToSell: false,
          allowedToSwap: false,
          allowedForWatchlist: true,
          allowedForDetailedInformation: true,
          allowedToTrade: true,
        },
        change1m: 13.99,
        change3m: 8.36,
        change3y: 23.51,
        administrativeFee: 1.75,
        startDate: 788742000000,
        yearHigh: 36.22,
        yearLow: 30.23,
        documents: [
          {
            title: 'Förhandsinformation om kostnader',
          },
        ],
        fundCompany: 'BlackRock SA',
        startValue: 0,
        closePrice: 34.46,
        latestClosePriceDate: 1679868000000,
        countDecimals: 1,
      },
    ],
  },
];
