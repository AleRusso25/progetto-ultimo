import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenvenutiComponent } from './benvenuti.component';

const routes: Routes = [{ path: '', component: BenvenutiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenvenutiRoutingModule { }
