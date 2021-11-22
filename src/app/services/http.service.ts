import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, {
      params: params,
    });
  }
  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }
  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
  public put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body);
  }
  public patch<T>(url: string, body: any): Observable<T> {
    return this.http.patch<T>(url, body);
  }
  constructor(private http: HttpClient) {}
}
