import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBoyPageRoutingModule } from './search-boy-routing.module';

import { SearchBoyPage } from './search-boy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBoyPageRoutingModule
  ],
  declarations: [SearchBoyPage]
})
export class SearchBoyPageModule {}
