import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScreenInput } from '../../interfaces/Screen';
import { ScreenService } from '../services/screen.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-screen-add',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './screen-add.component.html',
  styles: ``
})
export class ScreenAddComponent {
  model: ScreenInput = {
    name: '',
    capacity: 0,
    hasIMAX: false,
  }

  constructor(private screenService: ScreenService, private router: Router) { }

  onSubmit() {
    this.screenService.create(this.model)
      .subscribe((success: boolean) => {
        if (success)
          this.router.navigate(['/sale']);
      });
  }
}
