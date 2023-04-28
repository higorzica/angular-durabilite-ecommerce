import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddusuariosComponent } from './dashboard-addusuarios.component';

describe('DashboardAddusuariosComponent', () => {
  let component: DashboardAddusuariosComponent;
  let fixture: ComponentFixture<DashboardAddusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
