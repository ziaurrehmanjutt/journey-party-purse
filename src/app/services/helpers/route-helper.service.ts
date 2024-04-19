import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouteHelperService {

  constructor(
    private router: Router,
    private location: Location
  ) { }

  navigateToOtherPage(route:any) {
    this.router.navigate(route);
  }

  goBack() {
    this.location.back(); // Navigate back to the previous page
  }
}
