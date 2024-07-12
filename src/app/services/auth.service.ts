import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { UserLogin } from '../../interfaces/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  login(model: UserLogin): Observable<boolean> {
    return this.http.post('https://localhost:44315/api/User/Login', model, { withCredentials: true }).pipe(
      map(() => {
        return true;
      }), catchError((errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error);
        return of(false);
      }));
  }

  logout(): Observable<boolean> {
    return this.http.get('https://localhost:44315/api/User/Logout', { withCredentials: true }).pipe(
      map(() => {
        return true;
      }), catchError((errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error);
        return of(false);
      }));
  }

  isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>('https://localhost:44315/api/User/IsLoggedIn', { withCredentials: true }).pipe(
      map((response: boolean) => {
        return response;
      }), catchError((errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error);
        return of(false);
      }));
  }
}