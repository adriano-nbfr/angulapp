import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public obterUsuarios(): Observable<Usuario[]> {
    return (this.httpClient.get('https://jsonplaceholder.typicode.com/users') as Observable<any[]>).pipe(delay(5000));
  }

}