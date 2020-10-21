import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendBoyPageRoutingModule } from './recommend-boy-routing.module';

import { RecommendBoyPage } from './recommend-boy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendBoyPageRoutingModule
  ],
  declarations: [RecommendBoyPage]
})
export class RecommendBoyPageModule {}
