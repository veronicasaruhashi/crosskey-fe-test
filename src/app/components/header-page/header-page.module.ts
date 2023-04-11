import { NgModule } from '@angular/core';
import { HeaderPageComponent } from './header-page.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderPageComponent],
  imports: [CommonModule, MatCardModule],
  exports: [HeaderPageComponent],
})
export class HeaderPageModule {}
