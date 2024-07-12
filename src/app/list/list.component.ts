import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FilmOutput } from '../../interfaces/Film';
import { FilmGenre } from '../../enums/FilmGenre';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule],
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {
  data: FilmOutput[] = [];
  filteredData: FilmOutput[] = [];
  searchString: string = '';
  fromDate: string | null = null;
  toDate: string | null = null;
  showNavbar: boolean = false;

  constructor(private filmService: FilmService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn()
      .subscribe((isLoggedIn: boolean) => {
        this.showNavbar = isLoggedIn;
      });

    this.filmService.getAll()
      .subscribe((data: FilmOutput[]) => {
        this.data = data;
        this.filteredData = data;
      });
  }

  onSearchStringChange() {
    this.filteredData = this.data.filter(e => e.title.toLowerCase().includes(this.searchString.toLowerCase()));
  }

  onFromDateChange() {
    this.filteredData = this.data.filter(e => e.title.toLowerCase().includes(this.searchString.toLowerCase()));
  }

  onToDateChange() {
    this.filteredData = this.data.filter(e => e.title.toLowerCase().includes(this.searchString.toLowerCase()));
  }

  onAdd() {
    this.router.navigate(['/sale']);
  }

  getGenreString(genre: number): string {
    return FilmGenre[genre];
  }
}
