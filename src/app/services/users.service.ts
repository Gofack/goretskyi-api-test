import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	token: string = sessionStorage.getItem('token')!;
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'X-Token': this.token
		})
	};

	constructor(
		private http: HttpClient
	) { }

	getUsers() {
		return this.http.get(`${environment.mainSource}api/users`, this.httpOptions);
	}
}
