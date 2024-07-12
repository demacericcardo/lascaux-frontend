import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ScreenOutput } from '../../interfaces/Screen';
import { ScreenService } from '../services/screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-list',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './screen-list.component.html',
  styles: ``
})
export class ScreenListComponent {
  data: ScreenOutput[] = [];

  constructor(private screenService: ScreenService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.screenService.getAll()
      .subscribe((data: ScreenOutput[]) => {
        this.data = data;
      });
  }

  onAdd() {
    this.router.navigate(['/add-sala']);
  }

  onEdit(id: number) {
    this.router.navigate([`/edit-sala/${id}`]);
  }

  onDelete(id: number) {
    this.screenService.delete(id)
      .subscribe(() => {
        this.getAll();
      });
  }
}
