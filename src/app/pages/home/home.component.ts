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

  public resultados: any[] = [];
  public nextPage: string = "";
  public prevPage: string = "";
  public loading = true;
  public error = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(url: string = "https://pokeapi.co/api/v2/pokemon"): void {
    this.loading = true;
    this.error = false;

    this.pokemonService.getList(url).subscribe(
      (data: any) => {
        this.resultados = data.results;
        this.nextPage = data.next;
        this.prevPage = data.previous;
        this.loading = false;
      },
      (error) => {
        this.error = true;
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }
}
