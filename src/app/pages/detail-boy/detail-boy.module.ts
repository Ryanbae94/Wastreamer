import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBoyPageRoutingModule } from './detail-boy-routing.module';

import { DetailBoyPage } from './detail-boy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBoyPageRoutingModule
  ],
  declarations: [DetailBoyPage]
})
export class DetailBoyPageModule {}
