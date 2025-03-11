import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from '../interfaces/pokeapi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _urlBase: string = "https://pokeapi.co/api/v2/pokemon";
  private _httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  getByPage(urlBase: string = this._urlBase): Observable<any> {
    return this._httpClient.get(urlBase);
  }

  getById() {

  }


  getDescripcion() {

  }

}
