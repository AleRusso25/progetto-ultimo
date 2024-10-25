import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenvenutiRoutingModule } from './benvenuti-routing.module';
import { BenvenutiComponent } from './benvenuti.component';


@NgModule({
  declarations: [
    BenvenutiComponent
  ],
  imports: [
    CommonModule,
    BenvenutiRoutingModule
  ]
})
export class BenvenutiModule { }
