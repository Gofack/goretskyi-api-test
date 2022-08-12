import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../services/assessments.service';
import { MatDialog } from '@angular/material/dialog';
import { AssessmentsDialogComponent } from '../assessments-dialog/assessments-dialog.component';

export interface DialogData {
	data: object;
	type: string;
}

@Component({
	selector: 'app-assessments',
	templateUrl: './assessments.component.html',
	styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent implements OnInit {
	assessments: any;
	assessmentGraph: {} = {};

	constructor(
		private assessmentsService: AssessmentsService,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.assessmentsService.getAssessments().subscribe(data => {
			console.log(data);
			this.assessments = data;
		})
	}

	getGraph(id: number) {
		this.assessmentsService.getAssessmentGraph(id).subscribe(data => {
			this.assessmentGraph = data;
			this.dialog.open(AssessmentsDialogComponent, {
				width: '500px',
				data: {
					data: data
				}
			});
		})
	}
}