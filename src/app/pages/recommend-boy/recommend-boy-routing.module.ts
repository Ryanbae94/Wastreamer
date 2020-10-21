import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendBoyPage } from './recommend-boy.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendBoyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendBoyPageRoutingModule {}
