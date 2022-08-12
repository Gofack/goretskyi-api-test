import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response } from '../../interfaces/response';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	loginForm = new FormGroup({
		email: new FormControl('', [Validators.email]),
		password: new FormControl('', [Validators.minLength(3)])
	});

	onSubmit(): void {
		if (this.loginForm.valid) {
			this.authService.onLogin(this.loginForm.value.email, this.loginForm.value.password).subscribe((data: Response) => {
				sessionStorage.clear();
				for (let key in data) {
					sessionStorage.setItem(key, data[key as keyof Response])
				}
				this.authService.isAuthentifacated = true;
				if (sessionStorage.getItem('role') === 'Admin') {
					this.router.navigate(['admin']);
				} else {
					this.router.navigate(['user']);
				}
			});
		}
		this.loginForm.reset();
	}
}
