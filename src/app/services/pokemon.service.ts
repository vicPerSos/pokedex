import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
export interface Pokemon {
  name: string;
  url: string;
  id: number; // Añadimos el ID
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _urlBase: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private _httpClient: HttpClient) { }

  getList(url: string = this._urlBase): Observable<any> {
    return this._httpClient.get(url);
  }

  // Método para procesar los resultados y añadir el ID
  processResults(data: any): Pokemon[] {
    return data.results.map((result: any) => {
      const urlParts = result.url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2], 10); // Extraemos el ID
      return { ...result, id }; // Añadimos el ID al objeto
    });
  }
  searchPokemon(term: string): Observable<any[]> {
    if (!term.trim()) return of([]);

    return this._httpClient.get<any>(`${this._urlBase}/${term.toLowerCase()}`).pipe(
      map(pokemon => [pokemon]), // Retorna un array con el Pokémon encontrado
      catchError(() => {
        // Si no encuentra, busca coincidencias parciales (ej: "pika" → "pikachu")
        return this._httpClient.get<any>(this._urlBase).pipe(
          map(data => data.results.filter((p: any) => p.name.includes(term.toLowerCase())))
        );
      })
    );
  }


}