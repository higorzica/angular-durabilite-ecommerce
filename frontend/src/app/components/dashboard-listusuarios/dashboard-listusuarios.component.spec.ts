import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListusuariosComponent } from './dashboard-listusuarios.component';

describe('DashboardListusuariosComponent', () => {
  let component: DashboardListusuariosComponent;
  let fixture: ComponentFixture<DashboardListusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardListusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
