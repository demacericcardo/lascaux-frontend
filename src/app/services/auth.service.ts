import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { UserLogin } from '../../interfaces/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  login(model: UserLogin): Observable<boolean> {
    return this.http.post('https://localhost:44315/api/User/Login', model, { withCredentials: true }).pipe(
      map(() => {
        this.loggedIn.next(true);
        return true;
      }),
      catchError(error => {
        console.error('Login error', error);
        this.loggedIn.next(false);
        return of(false);
      })
    );
  }

  logout(): void {
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}