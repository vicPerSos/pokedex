import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  standalone: false,
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  @Output() searchEvent = new EventEmitter<string>(); // Evento para emitir el término
  searchTerm: string = '';

  onSearch() {
    this.searchEvent.emit(this.searchTerm.toLowerCase()); // Emite el término en minúsculas
  }

}
