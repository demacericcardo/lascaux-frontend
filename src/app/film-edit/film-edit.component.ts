import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmInput, FilmOutput } from '../../interfaces/Film';
import { FilmGenre } from '../../enums/FilmGenre';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-edit',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './film-edit.component.html',
  styles: ``
})
export class FilmEditComponent {
  queryStringId: number = 0;
  model: FilmInput = {
    title: '',
    description: '',
    director: '',
    genre: FilmGenre.Action,
    minuteLenght: 0,
  }
  filmGenres = Object.entries(FilmGenre).filter(([key, value]) => isNaN(+key)).map(([key, value]) => ({ key, value }));

  constructor(private filmService: FilmService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    const idParsed: number = id ? parseInt(id) : 0;

    this.queryStringId = idParsed;

    this.filmService.getById(idParsed)
      .subscribe((film: FilmOutput | null) => {
        if (film) {
          this.model = {
            title: film.title,
            description: film.description,
            director: film.director,
            genre: film.genre,
            minuteLenght: film.minuteLenght,
          };
        }
      });
  }

  onSubmit() {
    this.filmService.edit(this.queryStringId, this.model)
      .subscribe((success: boolean) => {
        if (success)
          this.router.navigate(['/film']);
      });
  }
}
