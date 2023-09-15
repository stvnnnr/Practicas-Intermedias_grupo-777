import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmonComponent } from './dashboard-admon.component';

describe('DashboardAdmonComponent', () => {
  let component: DashboardAdmonComponent;
  let fixture: ComponentFixture<DashboardAdmonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmonComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
