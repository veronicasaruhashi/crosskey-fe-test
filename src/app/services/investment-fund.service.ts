import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { APIResponse } from '../interfaces/api-response.interface';
import { InvestmentFund } from '../interfaces/investment-fund.interface';

@Injectable({
  providedIn: 'root',
})
export class InvestmentFundService {
  constructor(private httpClient: HttpClient) {}

  getFundList(): Observable<InvestmentFund[]> {
    return this.httpClient
      .get<APIResponse<InvestmentFund>[]>(environment.urlAPI)
      .pipe(
        map((result) => result[0].data),
        catchError(() => of([]))
      );
  }
}
