import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollStreamerPage } from './enroll-streamer.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollStreamerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollStreamerPageRoutingModule {}
