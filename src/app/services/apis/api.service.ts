import { Injectable } from '@angular/core';
import { ConfigApiService } from './config-api.service';
import { ListApiService } from './list-api.service';
import { PostApiService } from './post-api.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public config:ConfigApiService, public list:ListApiService,public post:PostApiService) { }

    
}
