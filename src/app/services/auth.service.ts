import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isAuthentifacated = sessionStorage.length > 0 ? true : false;
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		})
	};

	constructor(
		private http: HttpClient,
		private router: Router
	) { }

	onLogin(email: string, password: string): any {
		return this.http.post(`${environment.mainSource}api/login`, { 'email': email, 'password': password }, this.httpOptions);
	}

	logOut() {
		this.router.navigate(['']);
		this.isAuthentifacated = false;
		sessionStorage.clear();
	}
}
