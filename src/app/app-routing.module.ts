import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'user', component: AssessmentsComponent, canActivate: [AuthGuard] },
	{ path: 'admin', component: AssessmentsComponent, canActivate: [AuthGuard] },
	{ path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: '**', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
