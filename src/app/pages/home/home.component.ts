import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public resultados: any[] = [];
  public searchResults: any[] = [];
  public searchTerm: string = '';
  public nextPage: string = "";
  public prevPage: string = "";
  public loading = true;
  public error = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(url: string = "https://pokeapi.co/api/v2/pokemon") {
    this.loading = true;
    this.error = false;

    this.pokemonService.getList(url).subscribe(
      (data: any) => {
        this.resultados = this.pokemonService.processResults(data);
        this.nextPage = data.next;
        this.prevPage = data.previous;
        this.loading = false;
        this.searchResults = []; // Reinicia los resultados de búsqueda
      },
      (error) => {
        this.error = true;
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }

  onSearch(term: string) {
    this.searchTerm = term;
    if (!term) {
      this.searchResults = [];
      return;
    }

    this.pokemonService.searchPokemon(term).subscribe(
      (data: any) => {
        this.searchResults = data;
      },
      (error) => {
        this.searchResults = [];
        console.error('Error:', error);
      }
    );
  }
}
