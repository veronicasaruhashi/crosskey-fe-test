import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageComponent } from './header-page.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

describe('HeaderPageComponent', () => {
  let component: HeaderPageComponent;
  let fixture: ComponentFixture<HeaderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule],
      declarations: [HeaderPageComponent],
    });

    fixture = TestBed.createComponent(HeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    component.pageTitle = 'Test Title';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toEqual('Test Title');
  });

  it('should NOT show card info', () => {
    const card = fixture.nativeElement.querySelector('mat-card');
    expect(card).toBeFalsy();
  });

  it('should show card info', () => {
    component.info = '<b>Test Title</b>';
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('mat-card');
    expect(card).toBeTruthy();
    const info = fixture.nativeElement.querySelector('mat-card-content');
    expect(info.textContent).toEqual('Test Title');
  });
});
