import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UpperCasePipe } from '@angular/common';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule, UpperCasePipe],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.header-title');
    expect(title.textContent).toEqual('TEST TITLE');
  });

  it('should show subtitle', () => {
    component.subTitle = 'Test SubTitle';
    fixture.detectChanges();
    const subTitle = fixture.nativeElement.querySelector('.header-subtitle');
    expect(subTitle.textContent).toEqual('Test SubTitle');
  });
});
