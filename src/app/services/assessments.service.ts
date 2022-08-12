import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AssessmentsService {
	token: string = sessionStorage.getItem('token')!;
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'X-Token': this.token
		})
	};

	constructor(
		private http: HttpClient,
	) { }

	getAssessments() {
		return this.http.get(`${environment.mainSource}api/userassessments`, this.httpOptions);
	}

	getAssessmentGraph(id: number) {
		return this.http.get(`${environment.mainSource}api/userassessment/graph?id=${id}`, this.httpOptions);
	}
}
