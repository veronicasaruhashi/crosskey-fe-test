import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { InvestmentFund } from 'src/app/interfaces/investment-fund.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { InvestmentFundListColumns } from 'src/app/pages/investment-fund-list/investment-fund-list.constant';
import { mockInvestmentFund } from 'src/app/services/investment-fund.mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableComponent', () => {
  let component: TableComponent<InvestmentFund>;
  let fixture: ComponentFixture<TableComponent<InvestmentFund>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatTableModule,
        MatSortModule,
      ],
      declarations: [TableComponent],
    });

    fixture = TestBed.createComponent(TableComponent<InvestmentFund>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message when NO data', () => {
    const message = fixture.nativeElement.querySelector('tr.no-data');
    expect(message).toBeTruthy();
  });

  it('should show table data', () => {
    component.columns = InvestmentFundListColumns;
    component.data = mockInvestmentFund[0].data;
    fixture.detectChanges();

    const tableHead =
      fixture.nativeElement.querySelectorAll('table > thead > tr');
    expect(tableHead.length).toEqual(1);

    const tableBody =
      fixture.nativeElement.querySelectorAll('table > tbody > tr');
    expect(tableBody.length).toBeGreaterThan(1);
  });
});
