import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'detail',
    loadChildren: () => import('./screens/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./screens/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path:'',
    redirectTo:'listing',
    
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
