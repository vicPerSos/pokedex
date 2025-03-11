import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(): Promise<Resultado[]> {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const resJson = await res.json();
    console.log(resJson);
    if (resJson.results.lenght > 0) { return resJson.results; }
    return [];
  }

  getById() {

  }


  getDescripcion() {

  }

  //https://pokeapi.co/api/v2/pokemon/
}
