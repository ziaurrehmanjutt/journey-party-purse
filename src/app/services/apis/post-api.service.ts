import { Injectable } from '@angular/core';
import { ConfigApiService } from './config-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostApiService {

    constructor(public config: ConfigApiService, private http: HttpClient) { }

    getHeader(options: APIOptions): HttpHeaders {
        let header = new HttpHeaders();
        if (options.UseToken && options.UseToken == 1) {
            header.append('Authorization', localStorage.getItem("authToken12") ?? "");
        }
        header.append('Content-Type', 'application/json');

        return header;
    }

    apiOptions(tokenVersion = 1, isShowLoading = false, isShowError = false): APIOptions {
        let opt: APIOptions = {
            UseToken: tokenVersion,
            ShowLoading: isShowLoading,
            ShowError: isShowError
        }
        return opt;
    }

    getApi(url: string, body: any, options: APIOptions) {
        return new Promise((resolve, reject) => {
            this.http.post(url, this.makePostData(body), { headers: this.getHeader(options) }).subscribe((data) => {
                console.info(data);
                resolve(data);
            }, (error) => {
                console.error(error);
                reject(error);
            })
        })
    }

    makePostData(frmData:any):FormData {
        const formData = new FormData();

        for (const key in frmData) {
            if (frmData.hasOwnProperty(key)) {
                const value = Array.isArray(frmData[key]) ? JSON.stringify(frmData[key]) : frmData[key];
                formData.append(key, value);
            }
        }
        return formData;
    }
}
