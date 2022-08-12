import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	users: any;
	displayedColumns: string[] = ['email', 'first_name', 'last_name', 'groups'];

	constructor(
		private userService: UsersService
	) { }

	ngOnInit(): void {
		this.userService.getUsers().subscribe(data => {
			console.log(data);
			this.users = data;
		});
	}
}
