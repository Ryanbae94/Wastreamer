import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'recommend',
    loadChildren: () => import('./pages/recommend/recommend.module').then( m => m.RecommendPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'enroll-streamer',
    loadChildren: () => import('./pages/enroll-streamer/enroll-streamer.module').then( m => m.EnrollStreamerPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'search-boy',
    loadChildren: () => import('./pages/search-boy/search-boy.module').then( m => m.SearchBoyPageModule)
  },
  {
    path: 'recommend-boy',
    loadChildren: () => import('./pages/recommend-boy/recommend-boy.module').then( m => m.RecommendBoyPageModule)
  },
  {
    path: 'detail-boy',
    loadChildren: () => import('./pages/detail-boy/detail-boy.module').then( m => m.DetailBoyPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
