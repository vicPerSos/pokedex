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

  private _PokemonService: PokemonService;
  public resultados: Resultado[] = [];
  public nextPage: string = "";
  public prevPage: string = "";

  constructor(private PokemonService: PokemonService) {
    this._PokemonService = PokemonService
  }

  ngOnInit() {
    this.cargarLista();
  }
  
  cargarLista(): void {
    this._PokemonService.getByPage().subscribe((data: any) => {
      this.resultados = data.results;
      this.nextPage = data.next;
      this.prevPage = data.previous;
    });

  }

}
