import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsDialogComponent } from './assessments-dialog.component';

describe('AssessmentsDialogComponent', () => {
  let component: AssessmentsDialogComponent;
  let fixture: ComponentFixture<AssessmentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
