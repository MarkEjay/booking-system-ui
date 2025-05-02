import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(!!this.getToken());
  private currentUserSubject = new BehaviorSubject<any>(this.getUser());

  constructor() { 
    this.updateAuthState();

  }
  private updateAuthState(): void {
    const token = this.getToken();
    const user = this.getUser();
    this.isLoggedInSubject.next(!!token);
    this.currentUserSubject.next(user);
  }

  public get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  public get currentUser$(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.updateAuthState(); // Update subjects after token change

  }
  public getToken(): string  |  null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.updateAuthState(); // Update subjects after user change

  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  public logout(): void {
    window.sessionStorage.clear();
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next({});
  }
  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Add this method to get current user synchronously
  public getCurrentUser(): any {
    return this.currentUserSubject.getValue();
  }

  // Add this method to handle login success
  public handleLoginSuccess(token: string, user: any): void {
    this.saveToken(token);
    this.saveUser(user);
    this.updateAuthState();
  }

}
