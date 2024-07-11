import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FilmOutput } from '../../interfaces/Film';
import { FilmGenre } from '../../enums/FilmGenre';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {
  dataArray: FilmOutput[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getData().subscribe(data => {
      this.dataArray = data;
    });
  }
  
  getGenreString(genre: number): string {
    return FilmGenre[genre];
  }
}
