import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chart } from '../../interfaces/chart';

@Component({
	selector: 'app-assessments-dialog',
	templateUrl: './assessments-dialog.component.html',
	styleUrls: ['./assessments-dialog.component.scss']
})
export class AssessmentsDialogComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: Chart
	) { }

	ngOnInit(): void {
		console.log(this.data)
	}

	isAnChart(obj: any): obj is Chart {
		return (
			typeof obj === 'object' &&
			obj !== null &&
			'data' in obj &&
			'type' in obj
		);
	}

	toFixedValue(value: number) {
		return value.toFixed(1);
	}
}
