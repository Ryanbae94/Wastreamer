import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBoyPage } from './search-boy.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBoyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBoyPageRoutingModule {}
