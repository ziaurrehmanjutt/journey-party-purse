import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helpers/helper.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  constructor(private helper:HelperService) { }

  ngOnInit() {
  }

  isJourneyModelOpen = false;

  findTrip(){}

  goBack(){
    this.helper.route.goBack();
  }

  planTrip() {
    this.helper.route.navigateToOtherPage(["trips",'my-trips'])
    //this.router.navigate(['other-page']);
  }

}
