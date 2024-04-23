import { Injectable } from '@angular/core';
import { ApiService } from '../apis/api.service';

@Injectable({
    providedIn: 'root'
})
export class LocationControllerService extends ApiService {



    getAllCountries(){
        let url = this.config.API_URL + this.list.ALL_COUNTRIES;
        return this.post.getApi(url,this.post.apiOptions(1));
    }

    getAllStates(country:number){
        let url = this.config.API_URL + this.list.ALL_STATES + "/" + country;
        return this.post.getApi(url,this.post.apiOptions(1));
    }
}
