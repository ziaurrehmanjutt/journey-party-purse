import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helpers/helper.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss'],
})
export class AddTripComponent  implements OnInit {

  frmData = {
    title:""
  }
  constructor(public helper:HelperService,private http: HttpClient) { 
    this.loadCountries();
   }
   countries: any;
  ngOnInit() {}

  loadCountries() {
    // this.http.get('assets/jsons/all_states.json').subscribe(data => {
    //   this.countries = data;

    //   console.log(this.countries);
    // });
  }

  onSubmit(){

  }

}
