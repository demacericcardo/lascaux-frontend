import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FilmListComponent } from './film-list/film-list.component';
import { ScreenListComponent } from './screen-list/screen-list.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { ScreenAddComponent } from './screen-add/screen-add.component';
import { FilmEditComponent } from './film-edit/film-edit.component';
import { ScreenEditComponent } from './screen-edit/screen-edit.component';
import { ScheduleSetComponent } from './schedule-set/schedule-set.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'film', component: FilmListComponent, canActivate: [AuthGuard] },
  { path: 'sale', component: ScreenListComponent, canActivate: [AuthGuard] },
  { path: 'add-film', component: FilmAddComponent, canActivate: [AuthGuard] },
  { path: 'add-sala', component: ScreenAddComponent, canActivate: [AuthGuard] },
  { path: 'edit-film/:id', component: FilmEditComponent, canActivate: [AuthGuard] },
  { path: 'edit-sala/:id', component: ScreenEditComponent, canActivate: [AuthGuard] },
  { path: 'set-schedule/:id', component: ScheduleSetComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];