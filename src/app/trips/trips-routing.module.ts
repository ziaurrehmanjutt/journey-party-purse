import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsPage } from './trips.page';

const routes: Routes = [
  {
    path: '',
    component: TripsPage
  },  {
    path: 'my-trips',
    loadChildren: () => import('./my-trips/my-trips.module').then( m => m.MyTripsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsPageRoutingModule {}
