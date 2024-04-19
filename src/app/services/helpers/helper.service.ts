import { Injectable } from '@angular/core';
import { RouteHelperService } from './route-helper.service';
import { ModalHelperService } from './modal-helper.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    public route:RouteHelperService,
    public modal:ModalHelperService,
  ) { }
}
