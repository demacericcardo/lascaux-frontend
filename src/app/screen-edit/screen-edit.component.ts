import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScreenInput, ScreenOutput } from '../../interfaces/Screen';
import { ScreenService } from '../services/screen.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-screen-edit',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './screen-edit.component.html',
  styles: ``
})
export class ScreenEditComponent {
  queryStringId: number = 0;
  model: ScreenInput = {
    name: '',
    capacity: 0,
    hasIMAX: false,
  }

  constructor(private screenService: ScreenService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    const idParsed: number = id ? parseInt(id) : 0;

    this.queryStringId = idParsed;

    this.screenService.getById(idParsed)
      .subscribe((screen: ScreenOutput | null) => {
        if (screen) {
          this.model = {
            name: screen.name,
            capacity: screen.capacity,
            hasIMAX: screen.hasIMAX,
          };
        }
      });
  }

  onSubmit() {
    this.screenService.edit(this.queryStringId, this.model)
      .subscribe((success: boolean) => {
        if (success) {
          this.router.navigate(['/sale']);
        } else {
          alert('Errore nella creazione della sala');
        }
      }
      );
  }
}
