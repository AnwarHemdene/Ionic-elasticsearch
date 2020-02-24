import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteQuotePageRoutingModule } from './delete-quote-routing.module';

import { DeleteQuotePage } from './delete-quote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteQuotePageRoutingModule
  ],
  declarations: [DeleteQuotePage]
})
export class DeleteQuotePageModule {}
