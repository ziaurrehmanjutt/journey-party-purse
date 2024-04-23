import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class ListApiService {

    public ALL_COUNTRIES  = "api/countries";
    public ALL_CITIES  = "api/cities";
    public ALL_STATES  = "api/states";

   
}
