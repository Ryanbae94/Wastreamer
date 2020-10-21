import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBoyPage } from './detail-boy.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBoyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBoyPageRoutingModule {}
