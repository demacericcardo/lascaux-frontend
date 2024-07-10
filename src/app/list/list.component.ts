import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {
  dataArray: any[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getData().subscribe(data => {
      this.dataArray = data;
    });
  }
}
