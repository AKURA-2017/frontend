import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { URL_CONFIG } from '../config/config';
import 'rxjs/Rx';

@Injectable()
export class ProductService {


    public headers = new Headers({
        'Content-Type': 'application/json'
    });

    public options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) { }

    search(param) {
        return this.http.get(`${URL_CONFIG.HOST}/search?search=${param}`, this.options)
            .map((response) => response.json());
    }

}