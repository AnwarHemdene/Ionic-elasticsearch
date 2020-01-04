import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddQuotePageRoutingModule } from './add-quote-routing.module';

import { AddQuotePage } from './add-quote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddQuotePageRoutingModule
  ],
  declarations: [AddQuotePage]
})
export class AddQuotePageModule {}
