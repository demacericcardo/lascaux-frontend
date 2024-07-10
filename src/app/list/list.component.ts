import { Component } from '@angular/core';
import { FilmService } from '../film.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
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
