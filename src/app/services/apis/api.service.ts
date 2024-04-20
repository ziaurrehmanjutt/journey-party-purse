import { Injectable } from '@angular/core';
import { ConfigApiService } from './config-api.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public config:ConfigApiService) { }
    static SERVER_URL = "http://127.0.0.1:8000/";
    
}
