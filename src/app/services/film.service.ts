import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmOutput } from '../../interfaces/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'https://localhost:44315/api/Film/GetAll';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<FilmOutput[]>(this.apiUrl);
  }
}
