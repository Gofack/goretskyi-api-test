import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './components/header/header.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { AssessmentsDialogComponent } from './components/assessments-dialog/assessments-dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HeaderComponent,
		AssessmentsComponent,
		AssessmentsDialogComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		MatTableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
