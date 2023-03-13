import { Usuario } from './usuario';
import { ApiService } from './api-service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello Angular';
  autor = 'Adriano Nobre';
  usuarios$?: Observable<Usuario[]>; 

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    this.usuarios$ = this.apiService.obterUsuarios();
  }
}
