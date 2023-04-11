import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentFundListComponent } from './investment-fund-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderPageModule } from 'src/app/core/components/header-page/header-page.module';
import { TableModule } from 'src/app/core/components/table/table.module';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvestmentFundService } from 'src/app/services/investment-fund/investment-fund.service';

describe('InvestmentFundListComponent', () => {
  let component: InvestmentFundListComponent;
  let fixture: ComponentFixture<InvestmentFundListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        HeaderPageModule,
        TableModule,
        HttpClientTestingModule,
      ],
      providers: [InvestmentFundService],
      declarations: [InvestmentFundListComponent],
    });

    fixture = TestBed.createComponent(InvestmentFundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
