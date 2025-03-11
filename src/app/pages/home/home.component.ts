import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private PokemonService: PokemonService) { }

  listaPokemon: Resultado[] = [];

  ngOnInit() {
    this.cargarLista();
  }
  async cargarLista() {
    this.listaPokemon = [...this.listaPokemon, ... await this.PokemonService.getByPage()];
    console.log(this.listaPokemon);
  }

}
