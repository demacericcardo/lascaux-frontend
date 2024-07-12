import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScreenInput, ScreenOutput } from '../../interfaces/Screen';
import { catchError, map, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getAll(): Observable<ScreenOutput[]> {
    return this.http.get<ScreenOutput[]>('https://localhost:44315/api/Screen/GetAll', { withCredentials: true })
      .pipe(map((data: ScreenOutput[]) => {
        return data;
      }), catchError((errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error);
        return of([]);
      }));
  }

  getById(id: number): Observable<ScreenOutput | null> {
    return this.http.get<ScreenOutput>(`https://localhost:44315/api/Screen/GetById/${id}`, { withCredentials: true })
      .pipe(map((data: ScreenOutput) => {
        return data;
      }), catchError((errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error);
        return of(null);
      }));
  }

  create(model: ScreenInput): Observable<any> {
    return this.http.post('https://localhost:44315/api/Screen/Create', model, { withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError((errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error);
        return of(false);
      }));
  }

  edit(id: number, model: ScreenInput): Observable<any> {
    return this.http.patch(`https://localhost:44315/api/Screen/Edit/${id}`, model, { withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError((errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error);
        return of(false);
      }));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`https://localhost:44315/api/Screen/Delete/${id}`, { withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError((errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error);
        return of(false);
      }));
  }
}
