import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigApiService {

    constructor() { }

    static SERVER_URL = "http://127.0.0.1:8000/";
    get API_URL(){
        return ConfigApiService.SERVER_URL;
    }
}
