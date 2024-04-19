import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../services/helpers/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private helper:HelperService) { }

  ngOnInit() {
  }

  navigateToOtherPage(route:string) {
    this.helper.route.navigateToOtherPage([route])
    //this.router.navigate(['other-page']);
  }


}
