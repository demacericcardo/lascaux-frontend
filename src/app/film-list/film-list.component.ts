import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FilmOutput } from '../../interfaces/Film';
import { FilmService } from '../services/film.service';
import { FilmGenre } from '../../enums/FilmGenre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './film-list.component.html',
  styles: ``
})
export class FilmListComponent {
  data: FilmOutput[] = [];

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.filmService.getAll()
      .subscribe((data: FilmOutput[]) => {
        this.data = data;
      });
  }

  onAdd() {
    this.router.navigate(['/add-film']);
  }

  onSchedule(id: number) {
    this.router.navigate([`/set-schedule/${id}`]);
  }

  onCleanSchedule(id: number) {
    this.filmService.cleanSchedule(id)
      .subscribe(() => {
        this.getAll();
      });
  }

  onEdit(id: number) {
    this.router.navigate([`/edit-film/${id}`]);
  }

  onDelete(id: number) {
    this.filmService.delete(id)
      .subscribe(() => {
        this.getAll();
      });
  }

  getGenreString(genre: number): string {
    return FilmGenre[genre];
  }
}
