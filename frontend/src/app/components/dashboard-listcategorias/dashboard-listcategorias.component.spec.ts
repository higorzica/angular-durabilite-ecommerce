import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListcategoriasComponent } from './dashboard-listcategorias.component';

describe('DashboardListcategoriasComponent', () => {
  let component: DashboardListcategoriasComponent;
  let fixture: ComponentFixture<DashboardListcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListcategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardListcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
