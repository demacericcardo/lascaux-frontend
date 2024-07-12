import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScheduleInput } from '../../interfaces/Schedule';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenOutput } from '../../interfaces/Screen';
import { ScreenService } from '../services/screen.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilmService } from '../services/film.service';
import { FilmOutput } from '../../interfaces/Film';
import { format } from 'date-fns';

@Component({
  selector: 'app-schedule-set',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './schedule-set.component.html',
  styles: ``
})
export class ScheduleSetComponent {
  model: ScheduleInput = {
    id: null,
    startDate: '',
    endDate: '',
    fk_screen: null,
  }

  screens: ScreenOutput[] = [];

  constructor(private screenService: ScreenService, private filmService: FilmService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    const idParsed: number = id ? parseInt(id) : 0;

    this.model.id = idParsed;

    this.filmService.getById(idParsed)
      .subscribe((data: FilmOutput | null) => {
        if (data && data.schedule) {
          this.model.startDate = format(new Date(data.schedule.startDate), 'yyyy-MM-dd');
          this.model.endDate = format(new Date(data.schedule.endDate), 'yyyy-MM-dd');
          this.model.fk_screen = data.schedule.screen.id;
        }
      });

    this.screenService.getAll()
      .subscribe((data: ScreenOutput[]) => {
        this.screens = data;
        this.model.fk_screen = this.screens.length > 0 ? this.screens[0].id : null;
      });
  }

  onSubmit(): void {
    this.filmService.setSchedule(this.model)
      .subscribe((success: boolean) => {
        if (success) {
          this.router.navigate(['']);
        } else {
          alert('Errore nella creazione della programmazione');
        }
      }
      );
  }

}
