import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTripsPageRoutingModule } from './my-trips-routing.module';

import { MyTripsPage } from './my-trips.page';
import { AddTripComponent } from './add-trip/add-trip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // AddTripComponent,
    MyTripsPageRoutingModule
  ],
  declarations: [MyTripsPage,AddTripComponent]
})
export class MyTripsPageModule {}
