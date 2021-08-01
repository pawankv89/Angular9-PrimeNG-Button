import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { reduce, catchError, map, switchMap, filter } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

export const BASE_URL = 'https://github.com/pawankv89/files/blob/main/files';

@Injectable({
    providedIn: 'root'
})

export class DownloadService {
    constructor(
      private httpClient: HttpClient
    ) {}
    
    exportFile() {
       const url = `${BASE_URL}/sample-address-list.csv`;
       return this.httpClient.get(url);
      }
}