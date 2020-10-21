import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollStreamerPageRoutingModule } from './enroll-streamer-routing.module';

import { EnrollStreamerPage } from './enroll-streamer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollStreamerPageRoutingModule
  ],
  declarations: [EnrollStreamerPage]
})
export class EnrollStreamerPageModule {}
