import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfesoresComponent } from './dashboard-profesores.component';

describe('DashboardProfesoresComponent', () => {
  let component: DashboardProfesoresComponent;
  let fixture: ComponentFixture<DashboardProfesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfesoresComponent]
    });
    fixture = TestBed.createComponent(DashboardProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
