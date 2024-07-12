import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FilmOutput } from '../../interfaces/Film';
import { FilmGenre } from '../../enums/FilmGenre';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isAfter, isBefore, isSameDay, isWithinInterval } from 'date-fns';

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

  constructor(private filmService: FilmService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.filmService.getAll()
      .subscribe((data: FilmOutput[]) => {
        this.data = data;
        this.filteredData = data;
      });
  }

  onSearchStringChange() {
    this.filteredData = this.data.filter(e => e.title.toLowerCase().includes(this.searchString.toLowerCase()));
  }

  onResetDates() {
    this.fromDate = null;
    this.toDate = null;
    this.filteredData = this.data;
  }

  onDateChange() {
    this.filteredData = this.data.filter(e => {
      if (!e.schedule) return false;

      const isFromValid = !this.fromDate || isBefore(this.fromDate, e.schedule.endDate) || isSameDay(this.fromDate, e.schedule.endDate);
      const isToValid = !this.toDate || isAfter(this.toDate, e.schedule.startDate) || isSameDay(this.toDate, e.schedule.startDate);

      return isFromValid && isToValid;
    });
  }

  onAdd() {
    this.router.navigate(['/sale']);
  }

  getGenreString(genre: number): string {
    return FilmGenre[genre];
  }
}
