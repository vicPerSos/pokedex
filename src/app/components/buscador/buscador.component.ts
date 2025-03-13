import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-buscador',
  standalone: false,
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  @Output() searchEvent = new EventEmitter<string>(); // Evento para emitir el término
  searchTerm: string = '';
  searchSubject: any;

  onSearch() {
    this.searchEvent.emit(this.searchTerm.toLowerCase()); // Emite el término en minúsculas
    this.searchTerm = ''; // Limpia el input después de buscar

  }
  ngOnInit() {
    this.searchSubject.pipe(debounceTime(300)).subscribe((term: string) => {
      this.searchEvent.emit(term.toLowerCase());
    });
  }

  onInputChange() {
    this.searchSubject.next(this.searchTerm); // Emite el término, no el evento
  }

}
