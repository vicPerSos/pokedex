import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _urlBase: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private _httpClient: HttpClient) { }

  public getList(urlBase: string = this._urlBase): Observable<any> {
    return this._httpClient.get(urlBase);
  }
}
