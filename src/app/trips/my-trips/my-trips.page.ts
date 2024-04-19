import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helpers/helper.service';
import { AddTripComponent } from './add-trip/add-trip.component';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.page.html',
  styleUrls: ['./my-trips.page.scss'],
})
export class MyTripsPage implements OnInit {

  constructor(private helper:HelperService) { }

  ngOnInit() {
  }

  addTrip(){
    this.helper.modal.openModal({
      component: AddTripComponent
    }).then((data)=>{
      console.log(data);
    })
  }
}
