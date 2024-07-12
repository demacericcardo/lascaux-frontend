import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, ObservedValueOf, of } from 'rxjs';
import { FilmInput, FilmOutput } from '../../interfaces/Film';
import { ScheduleInput } from '../../interfaces/Schedule';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<FilmOutput[]> {
    return this.http.get<FilmOutput[]>('https://localhost:44315/api/Film/GetAll', { withCredentials: true })
      .pipe(map((data: FilmOutput[]) => {
        return data;
      }), catchError(error => {
        console.error('Error', error);
        return of([]);
      })
      );
  }

  getById(id: number): Observable<FilmOutput | null> {
    return this.http.get<FilmOutput>(`https://localhost:44315/api/Film/GetById/${id}`, { withCredentials: true })
      .pipe(map((data: FilmOutput) => {
        return data;
      }), catchError(error => {
        console.error('Error', error);
        return of(null);
      })
      );
  }

  create(model: FilmInput): Observable<boolean> {
    return this.http.post('https://localhost:44315/api/Film/Create', model, { withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError(error => {
        console.error('Error', error);
        return of(false);
      })
      );
  }

  edit(id: number, model: FilmInput): Observable<boolean> {
    return this.http.patch(`https://localhost:44315/api/Film/Edit/${id}`, model, { withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError(error => {
        console.error('Error', error);
        return of(false);
      })
      );
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete(`https://localhost:44315/api/Film/Delete/${id}`, { withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError(error => {
        console.error('Error', error);
        return of(false);
      })
      );
  }

  setSchedule(model: ScheduleInput): Observable<boolean> {
    return this.http.post<boolean>(`https://localhost:44315/api/Film/SetSchedule`, model, { withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError(error => {
        console.error('Error', error);
        return of(false);
      })
      );
  }

  cleanSchedule(id: number): Observable<boolean> {
    return this.http.get<boolean>(`https://localhost:44315/api/Film/CleanSchedule/${id}`, { withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError(error => {
        console.error('Error', error);
        return of(false);
      })
      );
  }


}
