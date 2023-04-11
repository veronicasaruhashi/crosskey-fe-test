import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { InvestmentFundService } from './investment-fund.service';
import { environment } from 'src/environments/environment.development';
import { mockInvestmentFund } from './investment-fund.mock';
import { InvestmentFund } from 'src/app/interfaces/investment-fund.interface';
import { APIResponse } from 'src/app/interfaces/api-response.interface';

describe('InvestmentFundService', () => {
  let service: InvestmentFundService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InvestmentFundService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(InvestmentFundService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#getInvestmentFunds', () => {
    let expectedData: APIResponse<InvestmentFund>[];

    beforeEach(() => {
      service = TestBed.inject(InvestmentFundService);
      expectedData = mockInvestmentFund;
    });

    it('should return expected list', () => {
      service.getFundList().subscribe({
        next: (data) => expect(data.length).toBeGreaterThan(0),
        error: fail,
      });

      const req = httpTestingController.expectOne(environment.urlAPI);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    });

    it('should be OK returning empty list', () => {
      service.getFundList().subscribe({
        next: (data) => expect(data.length).toEqual(0),
        error: fail,
      });

      const req = httpTestingController.expectOne(environment.urlAPI);

      expectedData = [];
      req.flush(expectedData);
    });

    it('should turn 404 into an empty result', () => {
      service.getFundList().subscribe({
        next: (data) => expect(data.length).toEqual(0),
        error: fail,
      });

      const req = httpTestingController.expectOne(environment.urlAPI);

      const msg = 'deliberate 404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
  });
});
