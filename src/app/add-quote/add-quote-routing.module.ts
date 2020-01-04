import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQuotePage } from './add-quote.page';

const routes: Routes = [
  {
    path: '',
    component: AddQuotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddQuotePageRoutingModule {}
