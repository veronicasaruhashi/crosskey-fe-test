import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, UpperCasePipe } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, UpperCasePipe],
  exports: [HeaderComponent],
})
export class HeaderModule {}
