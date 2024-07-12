import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmInput } from '../../interfaces/Film';
import { FilmGenre } from '../../enums/FilmGenre';
import { FilmService } from '../services/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-add',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './film-add.component.html',
  styles: ``
})
export class FilmAddComponent {
  model: FilmInput = {
    title: '',
    description: '',
    director: '',
    genre: FilmGenre.Action,
    minuteLenght: 0,
  }
  filmGenres = Object.entries(FilmGenre).filter(([key, value]) => isNaN(+key)).map(([key, value]) => ({ key, value }));

  constructor(private screenService: FilmService, private router: Router) { }

  onSubmit() {
    this.screenService.create(this.model)
      .subscribe((success: boolean) => {
        if (success)
          this.router.navigate(['/film']);
      });
  }
}
